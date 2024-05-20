import React from "react";
import './login.css';
import Typography from '@mui/material/Typography';

const config=require("../../config.js")
function Login (){
    return <Typography>
{config.login_button_name}
    </Typography>
}
export default Login;