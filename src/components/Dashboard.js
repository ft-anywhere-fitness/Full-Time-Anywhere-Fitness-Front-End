import React from "react";
import { useEffect, useState } from "react";
import RegistrantList from "./RegistrantList";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";

const Dashboard = (props) => {
  return (
    <div>
      <RegistrantList />
    </div>
  );
};

export default Dashboard;
