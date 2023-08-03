const sessionTokenName = 'session_token'
const userIdName = 'user_id'
const usernameId = "username"

/**
 * Retrieves the current session token.
 *
 * @function
 * @returns {string} - A session token as a string.
 */
export const getToken = () => {
  const token = localStorage.getItem(sessionTokenName)
  return token
}



export const getUser = () => {
  const userId = localStorage.getItem(userIdName)
  return userId
}

export const getUsername = () => {
  const username = localStorage.getItem(usernameId)
  return username
}


/**
 * Checks if a user is currently logged in.
 *
 * @function
 * @returns {boolean} - True if a session token exists, otherwise false.
 */
export const isUserLoggedIn = () => {
  const token = getToken()
  return token ? true : false
}

/**
 * Sets the session token in local storage.
 *
 * @function
 * @param {string} token - The session token to set.
 * @returns {string} - The session token that was set.
 * @throws {Error} - Throws an error if the token argument is not a string.
 */
export const setToken = (token) => {
  if(typeof token !== 'string') {
    throw new Error("token must be type: 'string'")
  }
  localStorage.setItem(sessionTokenName, token)
  return token
}

export const setUser = (userId) => {
  if(typeof userId !== 'string') {
    throw new Error("userId must be type: 'string'")
  }

  localStorage.setItem(userIdName, String(userId))
  return userId
}


export const setUsername = (username) => {
  if(typeof username !== 'string') {
    throw new Error("userId must be type: 'string'")
  }

  localStorage.setItem(usernameId, username)
  return username
}

/**
 * Removes the current session token from local storage.
 * Essentially, what this means is that the user is logged out
 *
 * @function
 * @returns {boolean} - Always returns true.
 */
export const clearToken = () => {
  localStorage.removeItem(sessionTokenName)
  return true
}

export const clearUserId = () => {
  localStorage.removeItem(userIdName)
  return true
}