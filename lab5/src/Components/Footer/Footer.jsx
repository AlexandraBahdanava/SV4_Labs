import React from "react";
import { Grid, Typography } from "@mui/material";
import "./Footer.css";

function Footer(){
    return(
        <Grid className="grid">
            <Typography className="text" variant="h6"><a className="link" href="https://github.com/AlexandraBahdanava">GitHub</a>, 2024</Typography>
        </Grid>
    )
}

export default Footer;