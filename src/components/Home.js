import React from "react";
import { Grid, Typography, Box } from "@mui/material";

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
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="mistic roove band."
          src="./mistic.jpeg"
        />
      </Grid>
    </>
  );
};

export default Home;
