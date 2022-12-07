import React from "react";
import { Grid } from "@mui/material";
import Home from "../components/Home";
import Biography from "../components/Biography";
import { SocialMedia } from "../components/SocialMedia";

const Body = () => {
  return (
    <Grid container spacing={4}>
      <Home></Home>
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <Biography></Biography>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <SocialMedia></SocialMedia>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        DESCARGAS
      </Grid>
    </Grid>
  );
};

export default Body;
