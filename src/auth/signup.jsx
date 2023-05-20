import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig/firebase"


const CreateNewAccountModal = ({
  openModal,
  onCloseModal,
  switchToLogin,
  setIsAuth,
}) => {
  const [registerError, setRegisterError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  // Form Submition
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const firstName = document.querySelector("#first-name").value;
    const lastName = document.querySelector("#last-name").value;
    const academicLevel = document.querySelector("#academic-level").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User created:", user.uid);
      setIsAuth(true);
      onCloseModal();
    } catch (error) {
      console.error(error);
      if (error.code === "auth/email-already-in-use") {
        setRegisterError("Email is already in use");
      } else if (error.code === "auth/weak-password") {
        setRegisterError("Password is too weak");
      } else {
        setRegisterError("Registeration unsuccessful");
      }
    }
  };

  return (
    <Modal
      open={openModal}
      close={onCloseModal}
      aria-labelledby="sign up modal"
      aria-describedby="modal for create account form"
      className="dialog-modal"
    >
      <Box
        className="modal-body"
        component="form"
        onSubmit={handleFormSubmit}
        noValidate
      >
        <Stack spacing={2}>
          <Typography variant="h5" align="center">
            Create New Account
          </Typography>
          <TextField
            required
            id="first-name"
            label="Enter First Name"
            type="text"
            variant="standard"
            margin="normal"
          />

          <TextField
            required
            id="last-name"
            label="Enter Last Name"
            type="text"
            variant="standard"
            margin="normal"
          />

          <TextField
            id="academic-level"
            label="Select Academic Level"
            variant="standard"
            color="primary"
            select
            required
          >
            <MenuItem value="primary">Primary Education</MenuItem>
            <MenuItem value="secondary">Form 1 - 3</MenuItem>
            <MenuItem value="ordinary">Ordinary Level</MenuItem>
            <MenuItem value="advance">Advanced Level</MenuItem>
            <MenuItem value="higher">Higher</MenuItem>
          </TextField>

          <FormControl component="fieldset" required>
            <FormLabel component="legend">Select Subject(s)</FormLabel>
            <FormGroup row>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Biology"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Chemistry"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Geology"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Maths"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Physics"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Food Science"
              />
            </FormGroup>
          </FormControl>
          <TextField
            required
            id="email"
            label="Enter Email"
            type="email"
            variant="standard"
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
            id="password"
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
          <Stack direction="row" justifyContent="space-between">
            <Button onClick={onCloseModal} variant="contained">
              Cancel
            </Button>
            <Button type="submit" variant="contained">
              Create Account
            </Button>
          </Stack>
          <Box>
            <Typography align="center">
              <a href="#" style={{ color: "#2196f3" }} onClick={switchToLogin}>
                Login Instead
              </a>
            </Typography>
          </Box>
          {registerError && (
            <Typography align="center" color="error">
              {registerError}
            </Typography>
          )}
        </Stack>
      </Box>
    </Modal>
  );
};

export default CreateNewAccountModal;
