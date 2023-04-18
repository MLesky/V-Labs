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
  IconButton
} from "@mui/material";
import {
  AccountCircle,
  VisibilityOff,
  Visibility
} from "@mui/icons-material"
import Logo from "../../assets/logo/logo";
import title from "../../assets/title";
import { useState } from "react";

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
  const isAuth = false;
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
              <Button variant="outline" href="#">
                Simulations
              </Button>
              <Button variant="outline" href="#">
                Teachings
              </Button>
              {isAuth ? (
                <Stack direction="row">
                  <Button variant="outline" href="#">
                    Make a Request
                  </Button>
                  <Avatar sx={{ width: 50, height: 50 }}>{"ML"}</Avatar>
                </Stack>
              ) : (
                <Button variant="outline" href="#" onClick={handleOpen}>
                  Login
                </Button>
              )}
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack spacing="20px">
            <Typography variant="h5" align="center">Log Into Account</Typography>
            <TextField 
              required
              id="login-email" 
              label="Enter Email" 
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
              id="login-password"
              label="Enter Password"
              variant="standard"
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
                startAdornment: (
                  <InputAdornment position="start">
                    
                  </InputAdornment>
                ),
              }} 
            />
            <Box>
              <Typography><a href="#" style={{color: "#2196f3"}}>Forgotten password?</a></Typography></Box>
            <Button variant='contained'>Log In</Button>
            <Box>
              <Typography align="center">
                <a href="#" style={{color: "#2196f3"}}>Create New Account Instead</a>
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
};

export default Navbar;
