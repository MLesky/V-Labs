import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const LoginModal = ({ openModal, onCloseModal, switchToSignUp, setIsAuth }) => {
  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  // Login In validation here
  // Authentication here
  const handleLogin = (event) => {
    event.preventDefault();
    let email = document.querySelector("#login-email").value;
    let password = document.querySelector("#login-password").value;
    if (email === "" || password === "") {
      setLoginError("Email and Password cannot be left Blank");
    } else if (email === "user@gmail.com") {
      if (password === "test1234") {
        setIsAuth(true);
        setLoginError("");
        onCloseModal();
      } else {
        setLoginError("Incorrect Password");
      }
    } else {
      setLoginError("Account Not Found");
    }
  };

  return (
    <Modal
      open={openModal}
      onClose={onCloseModal}
      aria-labelledby="login modal"
      aria-describedby="modal for login form"
      className="dialog-modal"
    >
      <Box className="modal-body">
        <Stack spacing={2}>
          <Typography variant="h5" align="center">
            Log Into Account
          </Typography>
          <FormControl>
            <Stack spacing={2}>
              <TextField
                required
                id="login-email"
                label="Enter Email"
                variant="standard"
                type="email"
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                required
                id="login-password"
                label="Enter Password"
                variant="standard"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
              />
              <Box>
                <Typography>
                  <a href="#" style={{ color: "#2196f3" }}>
                    Forgotten password?
                  </a>
                </Typography>
              </Box>
              <Button variant="contained" onClick={handleLogin}>
                Log In
              </Button>
            </Stack>
          </FormControl>
          <Box>
            {" "}
            <Typography align="center">
              <a href="#" style={{ color: "#2196f3" }} onClick={switchToSignUp}>
                Create New Account Instead
              </a>
            </Typography>
          </Box>
          <Box>
            {" "}
            <Typography align="center" color="error">
              {loginError}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Modal>
  );
};

export default LoginModal;
