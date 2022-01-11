import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { Card, CardMedia } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import ClassDetails from "./ClassDetails";
import { BASE_URL } from "../constants";
import { axiosWithAuth } from "../utils/AxiosWithAuth";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Classes() {
  const [classList, setClassList] = useState([]);
  const [render, setRender] = useState(false);

  useEffect(() => {
    axiosWithAuth()
      .get(`${BASE_URL}/api/classes`)
      .then((resp) => {
        setClassList(resp.data);
        console.log(classList);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
    <Grid container direction="column">
      <Typography variant="h2" marginTop={"4%"}>
        Upcoming Classes
      </Typography>
      <Grid item padding={"5%"}>
        {classList.map((item) => {
          return <ClassDetails cl={item} />;
        })}
      </Grid>
    </Grid>
  );
}

export default Classes;
