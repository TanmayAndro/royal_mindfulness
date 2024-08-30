import { Grid, Box, Typography, IconButton, Drawer, Button, List, ListItem, ListItemText, Divider } from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from 'react-router-dom';
import { logo } from '../assests';
const config = require('../config');

const Logo_part: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const token = localStorage.getItem("user_token");
  const first_name = localStorage.getItem("first_name");
  const navigate = useNavigate();

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    setDrawerOpen(open);
  };

  const handleDashboard = () => {
    navigate(`/dashboard/${localStorage.getItem('user_id')}`);
    setDrawerOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user_token");
    localStorage.removeItem("first_name");
    navigate("/login");
  };

  return (
    <Grid item xs={12} md={3} sm={12} lg={2}>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} className='main_heading_css'>
          <img src={logo} style={{ width: '80px' }} alt="logo" />
          <Typography className="main_heading_css" style={{ fontFamily: '"Fraunces", serif' }}>
            {config.main_heading}
          </Typography>
        </Box>
      </Link>

      <Box display={{ xs: "flex" }} className="second_grid_css drawer">
        <IconButton
          style={{ color: 'white' }}
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ width: '40%' }}
        PaperProps={{
          sx: { width: '40%', backgroundColor: '#ffff', color: 'black' }
        }}
      >
        <Box className="drawerparent"
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {config.headerItem.map((item: { name: string; link: string }, index: number) => (
              <ListItem button key={index} onClick={toggleDrawer(false)}>
                <Link to={item.link} style={{ textDecoration: "none", color: "inherit", fontFamily: "lato" }}>
                  <ListItemText primary={item.name} />
                </Link>
              </ListItem>
            ))}
          </List>
          {token && first_name && (
          <Box >
          <Button onClick={handleDashboard} sx={{ color: 'black' }}variant="contained"
              data-test-id="button" className="drawerbtn" color="inherit" >
            Dashboard
          </Button>
          <Button onClick={handleLogout} sx={{ marginTop:2, color: 'black' }}  variant="contained"
              data-test-id="button" className="drawerbtn" color="inherit">
            Logout
          </Button>
          </Box>
          )}
        </Box>
      </Drawer>
    </Grid>
  );
}

export default Logo_part;
