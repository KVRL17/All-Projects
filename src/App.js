import './App.css';
import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from '@mui/material';
import { Link as RouterLink, BrowserRouter as Router } from "react-router-dom";
import weather from './Images/image.jpeg';
import logo from './Images/logo.jpg';
import resume from './Images/resume.jpeg';
import heros from './Images/main.jpeg';
import games from './Images/mainimage.jpeg';
import fight from './Images/img.jpeg';

function App() {
  return (
    <div className="App">
      <Typography variant='h2'>Hi, This is Venkata Ramana.<br />These are my Projects</Typography>
      <div className='tasks'>
        <div className='comp1'>
          <Box className="box">
            <Typography
              sx={{
                textDecoration: "none",
                color: "Orangered",
                marginBottom: "10px",
              }}
              component={RouterLink}
              to="https://attendenceapp-nine.vercel.app/"
              variant="h6"
            >
              <img src={logo} style={{ height: '125px', width: '125px' }} alt='mainimage' /><br />
              Attendence
            </Typography>
            <Typography className="box-function">App</Typography>
          </Box>
          <Box className="box">
            <Typography
              sx={{
                textDecoration: "none",
                color: "Orangered",
                marginBottom: "10px",
              }}
              component={RouterLink}
              to="https://th.bing.com/th?id=OIP.jXUExLhQfsKT_MWBuQzkQQHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              variant="h6"
            >
              <img src="" style={{ height: '100px', width: '145px' }} alt='mainimage' /><br />
              Netflix
            </Typography>
            <Typography className="box-function">Clone</Typography>
          </Box>
          <Box className="box">
            <Typography
              sx={{
                textDecoration: "none",
                color: "Orangered",
                marginBottom: "10px",
              }}
              component={RouterLink}
              to="https://venkata-ramana-karri-portfolio.vercel.app/"
              variant="h6"
            >
              <img src={resume} style={{ height: '125px', width: '125px' }} alt='mainimage' /><br />
              Portfolio
            </Typography>
            <Typography className="box-function">Web page</Typography>
          </Box>
        </div>
        <br />
        <div className='comp2'>
          <Box className="box">
            <Typography
              sx={{
                textDecoration: "none",
                color: "Orangered",
                marginBottom: "10px",
              }}
              component={RouterLink}
              to="https://fighting-game-flax.vercel.app/"
              variant="h6"
            >
              <img src={fight} style={{ height: '125px', width: '125px' }} alt='mainimage' /><br />
              Fighting
            </Typography>
            <Typography className="box-function">Game</Typography>
          </Box>
          <Box className="box">
            <Typography
              sx={{
                textDecoration: "none",
                color: "Orangered",
                marginBottom: "10px",
              }}
              component={RouterLink}
              to="https://wheather-app-coral.vercel.app/"
              variant="h6"
            >
              <img src={weather} style={{ height: '125px', width: '125px' }} alt='mainimage' /><br />
              Weather
            </Typography>
            <Typography className="box-function">App</Typography>
          </Box>
          <Box className="box">
            <Typography
              sx={{
                textDecoration: "none",
                color: "Orangered",
                marginBottom: "10px",
              }}
              component={RouterLink}
              to="https://superhero-app-three.vercel.app/"
              variant="h6"
            >
              <img src={heros} style={{ height: '125px', width: '125px' }} alt='mainimage' /><br />
              Super Hero
            </Typography>
            <Typography className="box-function">App</Typography>
          </Box>
          <Box className="box">
            <Typography
              sx={{
                textDecoration: "none",
                color: "Orangered",
                marginBottom: "10px",
              }}
              component={RouterLink}
              to="https://react-counter-app-jeua.vercel.app/"
              variant="h6"
            >
              <img src={games} style={{ height: '125px', width: '125px' }} alt='mainimage' /><br />
              Rock Paper Scissor
            </Typography>
            <Typography className="box-function">Game</Typography>
          </Box>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

function RootApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default RootApp;