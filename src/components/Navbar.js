import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
      <AppBar position="absolute" color="primary">
        <Toolbar>
          <Button color="secondary">INICIO</Button>
          <Button color="secondary">BIOOGRAFIA</Button>
          <Button color="secondary">CONTACTO</Button>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default NavBar;
