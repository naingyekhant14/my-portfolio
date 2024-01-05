import { Grid, Box, CardMedia, Typography, Button } from "@mui/material";
import Image from "next/image";

import React from "react";

const About = () => {
  return (
    <Grid container spacing={1}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Image src="/images/about.png" width={500} height={500} alt={""} />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Box>
          <Typography
            variant="h2"
            sx={{ fontWeight: "bolder", fontSize: { xs: 35, lg: 50 } }}
          >
            About Me
          </Typography>
          <Typography variant="body2" sx={{ fontSize: 20 }}>
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications.I can quickly create
            websites using JavaScript,NextJs, React, Redux, Node.js, Express,
            PostgreSQL, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set.
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Button
              variant="text"
              sx={{
                color: "info.main",
                textTransform: "capitalize",
                fontSize: 18,
              }}
            >
              Skill
            </Button>
            <li>Node.js</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Nextjs</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>Git</li>

            <Button
              variant="text"
              sx={{
                color: "info.main",
                textTransform: "capitalize",
                fontSize: 18,
              }}
            >
              Education
            </Button>
            <li>University of Kyaukse</li>
            <li>Bsc Mathematic</li>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default About;
