import React from "react";
import './login.css';

const config=require("./config.js")
function Login (){
    return <h1>
{config.login_heading_name}
    </h1>
}
export default Login;