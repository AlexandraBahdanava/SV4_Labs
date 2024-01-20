import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";

function MainPage(){
    return(
        <Grid className="body">
            <Typography variant="h4" className="info"> Скоро здесь будет важная информация !</Typography>
        </Grid>
    )
}

export default MainPage;