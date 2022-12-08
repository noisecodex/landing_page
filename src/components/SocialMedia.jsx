import React from "react";
import { Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const SocialMedia = () => {
  return (
    <>
      <Grid item xs={6} sx={{ textAlign: "center" }}>
        <FacebookIcon fontSize="large" />
        <LocalPostOfficeIcon fontSize="large" />
        <TwitterIcon fontSize="large" />
        <YouTubeIcon fontSize="large" />
        <InstagramIcon fontSize="large" />
        <WhatsAppIcon fontSize="large" />
      </Grid>
    </>
  );
};
