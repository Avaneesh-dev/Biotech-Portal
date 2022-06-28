import React, { useState } from "react";
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, Outlet } from "react-router-dom";
import "./navBar.css";

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar
        sx={{ backgroundColor: "#182838" }}
        color="primary"
        position="sticky"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h4"
              noWrap
              component="div"
              sx={{
                fontFamily: "Poppins Bold",
                mr: 8,
                display: { xs: "none", md: "flex" },
              }}
            >
              Biotechnology Project
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
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                <Link to="/">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography
                      variant="h6"
                      sx={{ fontFamily: "Poppins Bold" }}
                      textAlign="center"
                    >
                      Home
                    </Typography>
                  </MenuItem>
                </Link>
                <Link to="/about">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography
                      variant="h6"
                      sx={{ fontFamily: "Poppins Bold" }}
                      textAlign="center"
                    >
                      About Us
                    </Typography>
                  </MenuItem>
                </Link>
                <Link to="/research">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography
                      variant="h6"
                      sx={{ fontFamily: "Poppins Bold" }}
                      textAlign="center"
                    >
                      Research
                    </Typography>
                  </MenuItem>
                </Link>
                <Link to="/seq-analyst">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography
                      variant="h6"
                      sx={{ fontFamily: "Poppins Bold" }}
                      textAlign="center"
                    >
                      Sequence Analysis
                    </Typography>
                  </MenuItem>
                </Link>
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              textAlign="center"
              sx={{
                fontFamily: "Poppins Bold",
                display: { xs: "flex", md: "none" },
              }}
            >
              Biotechnology Project
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Link to="home">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Home
                </Button>
              </Link>
              <Link to="about">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  About Us
                </Button>
              </Link>
              <Link to="research">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Research
                </Button>
              </Link>
              <Link to="seq-analyst">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Sequence Analysis
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>      
      <div className="jumbotron m-0 text-center">
        <video id="video-background" muted autoPlay loop>
          <source src={require("./test3.mp4")} type="video/mp4" />
          <source src={require("./test3.mp4")} type="video/ogg" />
        </video>
        <div className="container header">
          <h3>College of Biotechnology, SVPUAT</h3>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default ResponsiveAppBar;
