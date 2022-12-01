import React from "react";
import { Grid } from "@mui/material";

const Body = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={6} sx={{ textAlign: "center" }}>
        PRESENTACION
      </Grid>
      <Grid item xs={6} sx={{ textAlign: "center" }}>
        IMAGEN/LOGO
      </Grid>
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        BIOGRAFIA
      </Grid>
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        CONTACTO/REDES
      </Grid>
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        DESCARGAS
      </Grid>
    </Grid>
  );
};

export default Body;
