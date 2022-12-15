import React from "react";
import { Grid, Typography, Box, ImageList, ImageListItem } from "@mui/material";
import mistic from "../assets/static/mistic.jpeg";
import logo from "../assets/static/logo-blanco.png";

const Home = () => {
  return (
    <>
      <Grid item xs={5} sx={{ textAlign: "center" }}>
        <ImageList sx={{ width: 700, height: 203 }}>
          <ImageListItem key="0001">
            <img src={logo} alt="mistic roove" loading="lazy" />
          </ImageListItem>
        </ImageList>

        <Typography align="justify" variant="h6">
          Mistic Roove tiene como base musical sonidos del reggae y ska sobre el
          cual fusionan ritmos como rock, punk, metal, jazz, ritmos latinos,
          entre otros ingredientes. Las letras de nuestras canciones se basan en
          vivencias diarias como el amor, odio, viajes, introspección, fiesta,
          protesta; música básicamente para sentirla.
        </Typography>
      </Grid>
      <Grid item xs={7} sx={{ textAlign: "center" }}>
        <ImageList sx={{ width: 1200, height: 300 }} rowHeigt={300}>
          <ImageListItem key="0001">
            <img src={mistic} alt="mistic roove" loading="lazy" />
          </ImageListItem>
        </ImageList>
      </Grid>
    </>
  );
};

export default Home;
