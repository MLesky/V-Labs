import { CancelOutlined, Menu, Search } from "@mui/icons-material";
import {
  Box,
  Typography,
  List,
  Stack,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  TextField,
  InputAdornment,
  IconButton,
  Drawer,
} from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const experiments = [
  "01 - Calculus Grapher",
  "02 - My Solar System",
  "03 - Geometric Optics",
  "04 - Build a Nucleus",
  "05 - Density",
  "06 - Normal Modes",
  "07 - Collision Lab",
];
const SideBar = () => {
const [sideBarOpen, setSideBarOpen] = useState(false);
  const handleSideBarOpen = () => setSideBarOpen(true);
  const handleSideBarClose = () => setSideBarOpen(false);

    const getList = () => (
        <List>
        <ListItem>
          <Typography variant="h6">Experiments From Manual</Typography>
        </ListItem>
        <Box sx={{ marginX: 2 }}>
          <TextField 
            fullWidth 
            placeholder="Search..."
            InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                    >
                      <Search />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
        </Box>
        {experiments.map((exp) => (
          <NavLink to={`${exp}`} style={{ textDecoration: "none" }}>
            <ListItem>
              <ListItemButton>
                <ListItemText id="">
                  <Typography
                    className="title-text"
                    color="primary"
                    sx={{
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {exp}
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider component="li" />
          </NavLink>
        ))}
      </List>
    )

  return (
    <div>
        <IconButton sx={{
            display: {
                small: 'block',
                large: 'none',
            }
        }}
        onClick={handleSideBarOpen}
        >
            <Menu color='primary' />
        </IconButton>
        <Stack
      spacing="20px"
      sx={{
        borderRight: "3px solid grey",
        minWidth: 350,
        height: "calc(100vh-65px)",
        display: {
            small: 'none',
            large: 'block',
        }
      }}
    >
      {getList()}
    </Stack>
    <Drawer
    class="side-drawer"
    open={sideBarOpen}
    onClose={handleSideBarClose}
    anchor={"left"}>
        <Box className="drawer-content">
        <Stack direction="row-reverse" m={1}>
            <></>
            <IconButton color="primary" onClick={handleSideBarClose}>
              <CancelOutlined fontSize="large" />
            </IconButton>
          </Stack>
            {getList()}
        </Box>
    </Drawer>
    </div>
  );
};

export default SideBar;
