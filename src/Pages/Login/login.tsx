import React from "react";
import './login.css';
import { Typography } from "@mui/material";

const config=require("./config.js")
function Login (){
    return <Typography>
{config.login_heading_name}
    </Typography>
}
export default Login;