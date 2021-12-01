import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { Card, CardMedia } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import Class from "./Class";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Classes() {
  const [classList, setClassList] = useState([]);

  useEffect(() => {
    axios
      .get("https://anywherefitnesslambda.herokuapp.com/api/classes")
      .then((resp) => {
        setClassList(resp);
        console.log(classList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        {classList.map((item) => {
          return <Class class={item} />;
        })}
      </Grid>
    </div>
  );
}

export default Classes;
