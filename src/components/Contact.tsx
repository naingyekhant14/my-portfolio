import { Grid, Box } from "@mui/material";
import React from "react";

const Contact = () => {
  return (
    <Grid container spacing={1}>
      <Grid item sm={12} md={7}>
        <Box sx={{ bgcolor: "white" }}>white</Box>
      </Grid>
      <Grid item sm={12} md={5}>
        <Box sx={{ bgcolor: "red" }}>red</Box>
      </Grid>
    </Grid>
  );
};

export default Contact;
