import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
  },
});

const NavBar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ height: "75px" }}>
        <AppBar position="absolute" color="primary">
          <Toolbar>
            <Button color="secondary">INICIO</Button>
            <Button color="secondary">BIOOGRAFIA</Button>
            <Button color="secondary">CONTACTO</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

export default NavBar;
