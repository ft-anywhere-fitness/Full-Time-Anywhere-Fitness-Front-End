import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { Card, CardMedia } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Homepage() {
  return (
    <div>
      <Typography
        variant="h1"
        gutterBottom
        color="inherit"
        sx={{ marginTop: "1.5%" }}
      >
        Anywhere Fitness
      </Typography>
      <Paper sx={{ p: 2, margin: "auto", flexGrow: 1 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={6} alignItems="stretch">
            <Item elevation={6} className="homepage-text">
              <Typography
                gutterBottom
                variant="h4"
                color="inherit"
                sx={{ padding: "5% 5% 0" }}
              >
                Helping you grow <br></br> your business.
              </Typography>
              <br></br>
              <Typography color="inherit" sx={{ padding: "0 5% 5%" }}>
                These days, fitness classes can be held anywhere- a park, an
                unfinished basement or a garage- not just at a traditional gym.
                Certified fitness instructors need an easy way to take the
                awkwardness out of attendance taking and client payment
                processing. While you could use several mobile apps to
                accomplish this, AnywhereFitness is the all-in-one solution to
                meet your “on-location” fitness class needs. AnywhereFitness
                makes it painless for Instructors and Clients alike to hold and
                attend Fitness classes wherever they might be held.
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Card style={{ border: "none", boxShadow: "none" }}>
              <CardMedia
                component="img"
                src="https://source.unsplash.com/random/500x600"
                className="homepage-pic"
              />
              {/* <img src={homepagePic} className="homepage-pic"></img> */}
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Homepage;
