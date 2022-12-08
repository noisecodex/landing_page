import React from "react";
import { Container } from "@mui/material";

const Layout = (props) => {
  return (
    <Container
      maxWidth="false"
      sx={{
        background: "green",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {props.children}
    </Container>
  );
};

export default Layout;
