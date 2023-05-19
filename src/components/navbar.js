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
} from "@mui/material";
import { AccountCircle, VisibilityOff, Visibility } from "@mui/icons-material";
import Logo from "../assets/logo/logo";
import title from "../assets/title";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginModal, CreateNewAccountModal } from "../auth";
import RequestModal from "./requestModal";

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
  const [isAuth, setIsAuth] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);

  const [signupOpen, setSignupOpen] = useState(false);
  const handleSignupOpen = () => setSignupOpen(true);
  const handleSignupClose = () => setSignupOpen(false);

  const [requestOpen, setRequestOpen] = useState(true);
  const handleRequestOpen = () => setRequestOpen(true);
  const handleRequestClose = () => setRequestOpen(false);

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
      <AppBar position="sticky">
        <Toolbar>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: "100%" }}
          >
            <Stack direction="row" alignItems="center">
              <Logo />
              <Typography variant="h5" noWrap>
                {title}
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center">
              <Link 
                to={"/simulations"}
                style={{
                  color: "#FFF"
                }}
              >
                <Button variant="outline" href="#">
                  Simulations
                </Button>
              </Link>
              <Button variant="outline">Teachings</Button>
              <Button variant="outline" onClick={handleRequestOpen}>
                Make a Request
              </Button>
              {isAuth ? (
                <Avatar sx={{ width: 50, height: 50 }}>{"ML"}</Avatar>
              ) : (
                <Stack direction="row">
                  <Button variant="outline" onClick={handleLoginOpen}>
                    Login
                  </Button>
                  <Button variant="outline" onClick={handleSignupOpen}>
                    Create Account
                  </Button>
                </Stack>
              )}
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>

      <LoginModal
        openModal={loginOpen}
        onCloseModal={handleLoginClose}
        setIsAuth={setIsAuth}
        switchToSignUp={switchFromLoginToSignup}
      />

      <CreateNewAccountModal
        openModal={signupOpen}
        onCloseModal={handleSignupClose}
        setIsAuth={setIsAuth}
        switchToLogin={switchFromSignupToLogin}
      />

      <RequestModal
        openModal={requestOpen}
        onCloseModal={handleRequestClose}
        isAuth={isAuth}
      />
    </Box>
  );
};

export default Navbar;
