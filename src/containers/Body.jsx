import React from "react";
import { Grid } from "@mui/material";
import Home from "../components/Home";
import Biography from "../components/Biography";
import { SocialMedia } from "../components/SocialMedia";
import Downloads from "../components/Downloads";

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
        <Downloads></Downloads>
      </Grid>
    </Grid>
  );
};

export default Body;
