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
  FormControl
} from "@mui/material";
import {
  AccountCircle,
  VisibilityOff,
  Visibility
} from "@mui/icons-material"
import Logo from "../assets/logo/logo";
import title from "../assets/title";
import { useState } from "react";
import { Link } from 'react-router-dom'

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
  const [isAuth, setIsAuth] = useState(true);
  const [loginError, setLoginError] = useState('');
  const [loginOpen, setLoginOpen] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);
  const handleClickShowLoginPassword = () => setShowLoginPassword((show) => !show);
  const handleMouseDownLoginPassword = (event) => {
    event.preventDefault();
  };

  const [signupOpen, setSignupOpen] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const handleSignupOpen = () => setSignupOpen(true);
  const handleSignupClose = () => setSignupOpen(false);
  const handleClickShowSignupPassword = () => setShowSignupPassword((show) => !show);
  const handleMouseDownSignupPassword = (event) => {
    event.preventDefault();
  };
  const switchFromSignupToLogin = event => {
    handleSignupClose();
    handleLoginOpen();
  }
  const switchFromLoginToSignup = event => {
    handleLoginClose();
    handleSignupOpen();
  }
  const handleLogin = event => {
    event.preventDefault();
    let email = document.querySelector('#login-email').value;
    let password = document.querySelector('#login-password').value;
    if(email === '' || password === ''){
      setLoginError('Email and Password cannot be left Blank');
    }
    else if (email === 'user@gmail.com'){
      if(password === 'test1234'){
        setIsAuth(true);
        setLoginError('');
        handleLoginClose('');
      } else {
        setLoginError('Incorrect Password');
      }
    } else {
      setLoginError('Account Not Found')
    }
  }

  const [students, setStudents] = useState([]);

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
                <Stack direction='row'>
                  <Button variant="outline" href="#" onClick={handleLoginOpen}>
                  Login
                </Button>
                <Button variant="outline" href="#" onClick={handleSignupOpen}>
                  Create Account
                </Button>
                </Stack>
              )}
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>

      <Modal
        open={loginOpen}
        onClose={handleLoginClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack spacing="20px">
            <Typography variant="h5" align="center">Log Into Account</Typography>
            <FormControl>
                <Stack spacing='20px'>
                <TextField 
              required
              id="login-email" 
              label="Enter Email" 
              variant="standard"
              type='email'
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
              type={showLoginPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowLoginPassword}
                      onMouseDown={handleMouseDownLoginPassword}
                    >
                      {showLoginPassword ? <VisibilityOff /> : <Visibility />}
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
            <Button variant='contained' onClick={handleLogin} type='submit'>Log In</Button>
                </Stack>
            
            </FormControl>
             <Box> <Typography align="center">
                <a href="#" style={{color: "#2196f3"}} onClick={switchFromLoginToSignup}>Create New Account Instead</a>
              </Typography>
            </Box>
            <Box> <Typography align="center" color='error'>
                { loginError }
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Modal>

      <Modal
        open={signupOpen}
        onClose={handleSignupClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack spacing="20px">
            <Typography variant="h5" align="center">Create New Account</Typography>
            <TextField 
              required
              id="fname-email" 
              label="Enter First Name"
              type='text' 
              variant="standard"
              margin="normal"
            />
            <TextField 
              required
              id="signup-email" 
              label="Enter Second Name"
              type='text' 
              variant="standard"
              margin="normal"
            />

            <TextField 
              required
              id="signup-email" 
              label="Enter Email"
              type='email' 
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
              id="signup-password"
              label="Enter Password"
              variant="standard"
              type={showSignupPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowSignupPassword}
                      onMouseDown={handleMouseDownSignupPassword}
                    >
                      {showSignupPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
                startAdornment: (
                  <InputAdornment position="start">
                    
                  </InputAdornment>
                ),
              }} 
            />
            <Button variant='contained'>Create Account</Button>
            <Box>
              <Typography align="center">
                <a href="#" style={{color: "#2196f3"}} onClick={switchFromSignupToLogin}>Login Instead</a>
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
};

export default Navbar;
