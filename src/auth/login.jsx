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
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "../firebaseConfig/firebase"

const LoginModal = ({ openModal, onCloseModal, switchToSignUp }) => {
  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  // Login In validation here
  // Authentication here

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = document.querySelector("#login-email").value;
    const password = document.querySelector("#login-password").value;
    
    try {
      if (email === "" || password === "") {
        setLoginError("Email and Password cannot be left blank");
      } else {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        setLoginError("");
        onCloseModal();
      }
    } catch (error) {
      const errorCode = error.code;
      if (errorCode === "auth/wrong-password") {
        setLoginError("Incorrect Password");
      } else if (errorCode === "auth/user-not-found") {
        setLoginError("Account Not Found");
      } else {
        setLoginError("An error occurred. Please try again.");
      }
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
              <Stack direction="row" justifyContent="space-between">
            <Button onClick={onCloseModal} variant="contained">
              Cancel
            </Button>
            <Button variant="contained" onClick={handleLogin}>
                Log In
              </Button>
          </Stack>
              
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
