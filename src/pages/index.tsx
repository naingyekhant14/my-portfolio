import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";

const gridStyle = {
  display: "flex",
  justifyContent: "center",
  height: "90vh",
  alignItems: "center",
};

export default function Home() {
  return (
    <Grid container>
      <Grid sx={gridStyle} item xs={12} sm={12} md={6}>
        <Box>
          <Typography variant="h3" sx={{ pt: { xs: 5, sm: 0 } }}>
            Web Developer
          </Typography>
          <Typography sx={{ color: "success.main", my: 3 }} variant="h1">
            Naing Ye Khant
          </Typography>
          <Typography variant="body1" sx={{ color: "info.main", mb: 3 }}>
            Hello, I'm naing ye khant, I'm a website developer . I can quickly
            create websites using javascript framework with NextJs. I’m Aspiring
            Junior Web Developer seeking an entry-level position.
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: "success.main",
              color: "primary.main",
              textTransform: "capitalize",
              mr: 5,
              mb: { xs: 3, sm: 0 },
              ":hover": {
                backgroundColor: "secondary.main",
                color: "success.main",
              },
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 800 }}>
              Download CV
            </Typography>
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: "success.main",
              color: "primary.main",
              textTransform: "capitalize",
              ":hover": {
                backgroundColor: "secondary.main",
                color: "success.main",
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
              }}
            >
              Hireing Me
            </Typography>
          </Button>
          <Typography
            variant="body1"
            sx={{ mt: 3, alignItems: "center", display: "flex" }}
          >
            Check out of my:
            <Link href={"https://github.com/naingyekhant14"}>
              <Button>
                <GitHubIcon
                  sx={{
                    color: "success.main",
                    fontSize: 38,
                    ml: 2,
                    cursor: "pointer",
                    ":hover": {
                      color: "info.main",
                    },
                  }}
                />
              </Button>
            </Link>
          </Typography>
        </Box>
      </Grid>
      <Grid sx={gridStyle} item xs={12} sm={12} md={6}>
        <CardMedia
          component="img"
          image="./images/hero.png"
          sx={{
            maxWidth: 300,
            borderRadius: "50%",
            height: { xs: 270, sm: 320 },
          }}
        />
      </Grid>
    </Grid>
  );
}
