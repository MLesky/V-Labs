import { AppBar, Toolbar, Typography, Avatar, Stack, Button } from "@mui/material";
import Logo from "../../assets/logo/logo";
import title from "../../assets/title";

const Navbar = () => {
  const isAuth = false;

  return (
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
            <Typography variant="h5" noWrap>{title}</Typography>
          </Stack>
          <Stack direction="row" alignItems="center">
          <Button variant="outline" href="#">Simulations</Button>
          <Button variant="outline" href="#">Teachings</Button>
          {isAuth ? <Stack direction="row">
          <Button variant="outline" href="#">Make a Request</Button>
          <Avatar sx={{ width: 50, height: 50 }}>{"ML"}</Avatar>
          </Stack> : <Button variant="outline" href="#">Login</Button>
            }
        </Stack>
          </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
