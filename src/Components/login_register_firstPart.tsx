import React from 'react'
import { Box } from '@mui/material'
import { FirstBOx } from '../Pages/Login/login'
import { royal_logo } from '../assests'

const Login_register_firstPart = () => {
  return (
    <FirstBOx
    item
    xs={12}
    sm={12}
    md={6}
    lg={6}
    style={{ height: 'calc(100vh - 180px)'}}
  >
    <Box style={{ width: "100%"}}>
      <img
        src={royal_logo}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "0px 45.25px 45.25px 0px",
          objectFit:'cover'
        }}
      />
    </Box>
  </FirstBOx>
  )
}

export default Login_register_firstPart