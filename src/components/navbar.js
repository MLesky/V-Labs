import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Stack,
  Button,
  Modal,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  FormControl,
  Drawer,
  ListItem,
} from "@mui/material";
import {
  Menu,
  Cancel,
  CancelOutlined,
  Home,
  ExploreRounded,
  School,
} from "@mui/icons-material";
import Logo from "../assets/logo/logo";
import title from "../assets/title";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LoginModal, CreateNewAccountModal } from "../auth";
import RequestModal from "./requestModal";

import { useFirebaseAuth } from "../firebaseConfig/FirebaseAuthContext";

const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  height: "fit-content",
  bgcolor: "white",
  outline: "4px solid #2196f3",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

const Navbar = () => {
  const user = useFirebaseAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
    console.log("Has being set")
  }, [user]);

  const [loginOpen, setLoginOpen] = useState(false);
  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);

  const [signupOpen, setSignupOpen] = useState(false);
  const handleSignupOpen = () => setSignupOpen(true);
  const handleSignupClose = () => setSignupOpen(false);

  const [requestOpen, setRequestOpen] = useState(false);
  const handleRequestOpen = () => setRequestOpen(true);
  const handleRequestClose = () => setRequestOpen(false);

  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const handleNavDrawerOpen = () => setNavDrawerOpen(true);
  const handleNavDrawerClose = () => setNavDrawerOpen(false);

  const switchFromSignupToLogin = (event) => {
    handleSignupClose();
    handleLoginOpen();
  };
  const switchFromLoginToSignup = (event) => {
    handleLoginClose();
    handleSignupOpen();
  };

  return (
    <Box>
      <AppBar position="sticky" sx={{}}>
        <Toolbar sx={{ paddingLeft: "0px !important" }}>
        <Stack sx={{ width: "100%" }}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <div id="empty-box"></div>
            <Stack direction="row" alignItems="center" justifyContent="start">
              <Logo />
              <Typography variant="h5" noWrap>
                {title}
              </Typography>
            </Stack>
            {!isLoading && 
            <Box id="nav-links">
              <Stack direction="row" alignItems="center">
                <NavLink
                  to={"/"}
                  style={{
                    color: "#FFF",
                  }}
                >
                  <Button size="small" variant="outline">Home</Button>
                </NavLink>
                <NavLink
                  to={"/simulations"}
                  style={{
                    color: "#FFF",
                  }}
                >
                  <Button size="small" variant="outline">Simulations</Button>
                </NavLink>
                <NavLink
                  to={"/teachings"}
                  style={{
                    color: "#FFF",
                  }}
                >
                  <Button variant="outline">Teachings</Button>
                </NavLink>
                <Button size="small" variant="outline" onClick={handleRequestOpen}>
                 Request
                </Button>
                {user ? (
                  <NavLink to="/profile" style={{ textDecoration: "none" }}>
                    <Avatar sx={{ width: 50, height: 50 }}>{"AN"}</Avatar>
                  </NavLink>
                ) : (
                  <Stack direction="row" class="auth-btns">
                    <Button size="small" variant="outline" onClick={handleLoginOpen}>
                      Login
                    </Button>
                    <Button size="small" variant="outline" onClick={handleSignupOpen}>
                      Create Account
                    </Button>
                  </Stack>
                )}
              </Stack>
            </Box>}
            <IconButton id="menu-btn">
              <Menu sx={{ color: "white" }} onClick={handleNavDrawerOpen} />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>

      <LoginModal
        openModal={loginOpen}
        onCloseModal={handleLoginClose}
        switchToSignUp={switchFromLoginToSignup}
      />

      <CreateNewAccountModal
        openModal={signupOpen}
        onCloseModal={handleSignupClose}
        switchToLogin={switchFromSignupToLogin}
      />

      <RequestModal
        openModal={requestOpen}
        onCloseModal={handleRequestClose}
      />
      <Drawer
        class="side-drawer"
        open={navDrawerOpen}
        onClose={handleNavDrawerClose}
        anchor={"right"}
      >
        <Box class="drawer-content">
          <Stack direction="row" m={1}>
            <></>
            <IconButton color="primary" onClick={handleNavDrawerClose}>
              <CancelOutlined fontSize="large" />
            </IconButton>
          </Stack>
          <Stack direction="column" mt={5}>
            <NavLink to="/" style={{ textDecoration: "none", width: "100%" }}>
              <Button sx={{ width: "100%" }} onClick={handleNavDrawerClose} startIcon={<Home />}>
                Home
              </Button>
            </NavLink>
            <NavLink
              to="/simulations"
              style={{ textDecoration: "none", width: "100%" }}
            >
              <Button sx={{ width: "100%" }} onClick={handleNavDrawerClose} startIcon={<ExploreRounded />}>
                Simulations
              </Button>
            </NavLink>
            <NavLink
              to="/teachings"
              style={{ textDecoration: "none", width: "100%" }}
            >
              <Button sx={{ width: "100%" }} onClick={handleNavDrawerClose} startIcon={<School />}>
                Teachings
              </Button>
            </NavLink>
            <Button
              onClick={() => {
                handleNavDrawerClose();
                handleRequestOpen();
              }}
            >
              Make a Request
            </Button>
            {user ? (
              <NavLink
                to="/profile"
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Button sx={{ width: "100%" }} onClick={handleNavDrawerClose}>
                  Profile
                </Button>
              </NavLink>
            ) : (
              <>
                <Button
                  onClick={() => {
                    handleNavDrawerClose();
                    handleLoginOpen();
                  }}
                >
                  Log In
                </Button>
                <Button
                  onClick={() => {
                    handleNavDrawerClose();
                    handleSignupOpen();
                  }}
                >
                  Create New Account
                </Button>
              </>
            )}
          </Stack>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
