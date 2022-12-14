import React from "react";
import { Grid, Typography, Box, ImageList, ImageListItem } from "@mui/material";

const Home = () => {
  return (
    <>
      <Grid item xs={6} sx={{ textAlign: "center" }}>
        <Typography align="justify" variant="h6">
          Mistic Roove tiene como base musical sonidos del reggae y ska sobre el
          cual fusionan ritmos como rock, punk, metal, jazz, ritmos latinos,
          entre otros ingredientes. Las letras de nuestras canciones se basan en
          vivencias diarias como el amor, odio, viajes, introspección, fiesta,
          protesta; música básicamente para sentirla.
        </Typography>
      </Grid>
      <Grid item xs={6} sx={{ textAlign: "center" }}>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
          <ImageListItem key="0001">
            <img
              src="../static/mistic.jpeg"
              alt="mistic roove"
              loading="lazy"
            />
          </ImageListItem>
        </ImageList>
      </Grid>
    </>
  );
};

export default Home;
