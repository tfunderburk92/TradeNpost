require("dotenv").config();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { findById, findAll, createUser, findByUsername, destroyUser,  modifyUser } = require('./service')

exports.showAll = async (req, res) => {
  try {

    // Only allow admins to access the user list
    if (!req.user || req.user.role !== 'admin') {
      return res.status(403).json({ error: 'You do not have permission to access this resource' })
    }

    const allUsers = await findAll()
    return res.json(allUsers)
  } catch (error) {
    console.log(error);
    return res.status(500).json();
  }
};

exports.deleteUser = async (req, res) => {
  const userId = req.params.userId
  try {
    // Only allow admins to access the user list
    if (!req.user || req.user.role !== 'admin') {
      return res.status(403).json({ error: 'You do not have permission to access this resource' })
    }

    const deletedUser = await destroyUser(userId)
    return res.json(deletedUser)

  } catch (error) {
    console.log(error)
    return res.status(500).json()
  }
}

exports.updateUser = async (req, res) => {
  const userId = req.body.userId
  const userData = req.body
  console.log(userData)
  try {
    // Only allow admins to access the user list
    if (!req.user || req.user.role !== 'admin') {
      return res.status(403).json({ error: 'You do not have permission to access this resource' })
    }

    const updatedUser =  await modifyUser(userData, userId)
    return res.json(updatedUser)

  } catch (error) {
    console.log(error)
    return res.status(500).json()
  }
}

exports.showMe = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Invalid token provided" });
    }
    console.log("auth req.user: ", req.user);
    const user = { ...req.user };

    if (!user) {
      return res.status(404).json("No User Found");
    }

    delete user.password;
    delete user.createdAt;

    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json();
  }
};

exports.showById = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Invalid token provided" });
    }
    console.log("auth req.user: ", req.user);
    //get the authenticated user using the userId provided from authentication
    console.log('req.user.userId', req.user)
    const user = await findById(req.user.userId);
    // Only allow admins and account owners to access the user data
    if (!user || (user.userId != req.params.userId && user.role !== "admin")) {
      return res
        .status(403)
        .json({ error: "You do not have permission to access this resource" });
    }

    const foundUser = await findById(req.params.userId);
    console.log(foundUser);
    if (!foundUser) {
      return res.status(404).json("No User Found");
    }

    return res.json(foundUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json();
  }
};

exports.register = async (req, res) => {
  try {
    const userData = req.body;
    const user = await createUser(userData);

    // Create a JWT and send it back to the client
    const token = jwt.sign({ id: user.userId }, process.env.SECRET_KEY);
    return res.json({ token });
  } catch (error) {
    console.log(error);

    if (error.code === "ER_DUP_ENTRY") {
      return res.status(409).json({ message: "Account already exists" });
    }

    return res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.updateUserById = async (req, res) => {
  try {
    const userData = req.body;
    const userId = req.user.userId
    await modifyUser(userData, userId);
    // Create a JWT and send it back to the client
    return res.json();
  } catch (error) {
    console.log(error);
    if (error.code === "ER_DUP_ENTRY") {
      return res.status(409).json({ message: "Account already exists" });
    }
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.login = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Basic ")) {
      return res.status(401).json({ message: "Invalid authorization header" });
    }

    const credentials = Buffer.from(authHeader.slice(6), "base64")
      .toString()
      .split(":");
    const [username, password] = credentials;

    console.log('username', username)
    console.log('password', password)
    const user = await findByUsername(username);
    console.log('user', user)

    // If the user isn't found or the password is incorrect, return an error
    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Create a JWT and send it back to the client
    const token = jwt.sign({ id: user.userId }, process.env.SECRET_KEY);
    return res.json({ token, user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
