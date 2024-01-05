import { Grid, Box, Button, Typography } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";
import Link from "next/link";

export const screenCenter = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
export const buttonStyle = {
  fontSize: 20,
  bgcolor: "secondary.main",
  fontWeight: "bold",
  textTransform: "capitalize",

  "&:hover": {
    backgroundColor: "success.main",
    color: "primary.main",
  },
};
const HeroSection = () => {
  return (
    <Box sx={{ height: { md: "708px", xs: "932px" } }}>
      <Grid container spacing={1} sx={{ height: { md: "558px", xs: "932px" } }}>
        <Grid item xs={12} md={7} sx={screenCenter}>
          <Box>
            <div>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: "bolder",
                  fontSize: { xs: 50, lg: 70 },
                  color: "secondary.main",
                }}
              >
                Hello, I'm
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bolder",
                  fontSize: { xs: 50, lg: 70 },
                  my: 2,
                }}
                variant="h1"
              >
                Naing Ye Khant
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: "secondary.main", fontWeight: "bolder", mb: 2 }}
              >
                Web Developer
              </Typography>

              <div style={{ marginTop: 50 }}>
                <Button sx={buttonStyle} variant="contained">
                  Download CV
                </Button>
                <Box
                  sx={{
                    mx: { xs: 0, sm: 2 },
                    display: { xs: "block", sm: " inline-block" },
                    my: { xs: 3, sm: 0 },
                  }}
                >
                  <Button sx={buttonStyle} variant="contained">
                    Hire Me
                  </Button>
                </Box>
                <Link href={"https://github.com/naingyekhant14"}>
                  <Button variant="contained">
                    <GitHubIcon
                      sx={{
                        color: "secondary.main",
                        fontSize: 35,
                        "&:hover": {
                          color: "success.main",
                        },
                      }}
                    />
                  </Button>
                </Link>
              </div>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} md={5} sx={screenCenter}>
          <Image
            src="/images/profile.jpeg"
            alt=""
            width={280}
            height={280}
            style={{ borderRadius: "50%" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
