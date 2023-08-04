import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import {Paper, AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from '@mui/icons-material/Logout';
import { getToken, isUserLoggedIn, setToken, clearToken, clearUserId } from "../utility/utils";
import { getMe } from "../utility/api";

//settings for the profile dropdown
function Navbar() {

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [myData, setMyData] = useState({});
  const settings = ["Profile", "Account", "Logout"];



  const isUserAdmin = () => {
    if (myData.role === "admin") {
      return true
    }
		return false
  };
// This function logs the user out.
// And it deletes the token that we got when logging in
// And also the userId that we got when logging in
  function Logout() {
    clearToken();
    clearUserId();
    window.location.replace("/");
  }
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  if (!myData) {
    return <div>loading...</div>;
  }

	return (
		<Paper>
			<AppBar position="static">
				<Container maxWidth="xl">
					<Toolbar color="secondary" disableGutters>
						<Link
							to="/"
							style={{ textDecoration: "none", color: "white" }}>
							<Typography
								variant="h6"
								noWrap
								component="a"
								href="/"
								sx={{
									mr: 2,
									display: { xs: "none", md: "flex" },
									fontFamily: "monospace",
									fontWeight: 700,
									letterSpacing: ".3rem",
									color: "inherit",
									textDecoration: "none",
								}}>
								Trade'N'Post
							</Typography>
						</Link>

						<Box
							sx={{
								flexGrow: 1,
								display: { xs: "flex", md: "none" },
								alignItems: "center",
							}}>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "left",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: "block", md: "none" },
						}}></Menu>
						</Box>
						<Box
							sx={{
								flexGrow: 1,
								display: { xs: "none", md: "flex" },
								flexDirection: "flex-end",
								alignItems: "center",
								justifyContent: "flex-end",
								textDecoration: "none",
								color: "white",
							}}>


{/* If user is logged in this profile button will appear in the navbar */}
{isUserLoggedIn() ? <Link to="/profile"><Button variant="contained" color="secondary" style={{marginRight: '14px'}}>Profile</Button></Link> : (<>
	<Link to="/login"><Button variant="contained" color="secondary" style={{marginRight: '14px'}}>Log in</Button></Link>
	<Link to="/register">   <Button variant="outlined" color="secondary" style={{marginRight: '14px'}}>Register</Button></Link>
</>)}

	
							{/* link the notification bell icon to /notifications */}
							{/* <Link to="/notifications">
								<NotificationsIcon
									sx={{
										display: { xs: "none", md: "flex" },
										mr: 1,
										textDecoration: "none",
										color: "white",
									}}
								/>
							</Link>  */}



									{/* This button logs user out */}
							{isUserLoggedIn() &&  <IconButton color="primary"   aria-label="logout" onClick={Logout}>
								<LogoutIcon />
							</IconButton>}

						</Box>

						
					</Toolbar>
				</Container>
			</AppBar>
		</Paper>
	);
}

export default Navbar;
