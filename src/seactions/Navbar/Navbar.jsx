import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SouthAmericaIcon from "@mui/icons-material/SouthAmerica";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";


import { FaCartPlus} from "react-icons/fa";


import "./Navbar.css";
import { Link } from "react-router-dom";
// import Cart from '../Cart/Cart';

// const pages = ["Product", "Cart", "About"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbarr = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  return (
    <>
      <AppBar className="bg-dark bg-opacity-10" position="absolute">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <SouthAmericaIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/Product"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Lotion
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
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
                }}
              >
                <MenuItem
                  className="d-grid text-decoration-none "
                  onClick={handleCloseNavMenu}
                >
                  <Link
                    className=" text-decoration-none w-100"
                    to="/ListProduct"
                    textAlign="center"
                    style={{
                      // height: "20px",
                      color: "#ddc6b6",
                      textDecoration: "none",
                      zIndex: "3",
                      // fontSize: "20px",
                      // fontWeight: "bold",
                    }}
                  >
                    Product
                  </Link>
                  <hr  style={{ color: "#ddc6b6" , height: "2px", width: "100%", margin: "0px", marginTop: "6px"}}/>
                  <Link
                    className=" text-decoration-none mt-3"
                    to="/Cart"
                    textAlign="center"
                    style={{
                      // height: "20px",
                      color: "#ddc6b6",
                      textDecoration: "none",
                      zIndex: "3",
                      // fontSize: "20px",
                      // fontWeight: "bold",
                    }}
                  >
                    Cart
                  </Link>
                  <hr  style={{ color: "#ddc6b6" , height: "2px", width: "100%", margin: "0px", marginTop: "6px", textAlign: "center"}}/>
                  <Link
                    className=" text-decoration-none mt-3"
                    to="/About"
                    textAlign="center"
                    style={{
                      // height: "20px",
                      color: "#ddc6b6",
                      textDecoration: "none",
                      zIndex: "3",
                      // fontSize: "20px",
                      // fontWeight: "bold",
                    }}
                  >
                    About
                  </Link>
                </MenuItem>
              </Menu>
            </Box>
            <SouthAmericaIcon
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/Product"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Lotion
            </Typography>
            <Box
              className="gap-4 d-sm-none d-md-flex flex-grow-1 "
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
              <Link
                className="text-white my-2 d-block text-decoration-none"
                // sx={{ my: 2, color: "white", display: "block" }}
                to="/ListProduct"
              >
                Product
              </Link>
              <Link
                className="text-white my-2 d-block text-decoration-none"
                // sx={{ my: 2, color: "white", display: "block" }}
                to="/Cart"
              >
                <FaCartPlus /> Cart
              </Link>
              <Link
                className="text-white my-2 d-block text-decoration-none"
                // sx={{ my: 2, color: "white", display: "block" }}
                to="/About"
              >
                About
              </Link>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://images.unsplash.com/photo-1693039537350-3bba6975add7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    style={{ backgroundColor: "#ddc6b6" }}
                    className="text-white font-weight-bold"
                    key={setting}
                    onClick={handleCloseUserMenu}
                  >
                    <Typography href={`/${setting}`} textAlign="center">
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbarr;
