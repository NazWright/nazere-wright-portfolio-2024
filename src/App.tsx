import React from "react";
import logo from "./logo.svg";
import "./App.css";
import mainImage from "./static/main.jpg";
import nazWrightIcon from "./static/TECH VENTURES.png";
import {
  Grid,
  Typography,
  Link,
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import BasicSpeedDial from "./SpeedDial";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        DareDev Tech Ventures
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function handleSubmit() {
  console.log("submit");
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Grid xs={6} className="w-100 height-100-vh">
          <Box
            sx={{
              my: 5,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img className="naz-wright-logo" src={nazWrightIcon} />
            <Typography
              component="h1"
              variant="h1"
              className="merienda-heading decorate"
            >
              <span className="swap">Nazere</span> Wright
            </Typography>
            <Typography component="h1" variant="h5" className="sub-heading">
              Software Engineer, Technical Writer, Freelance Video Editor
            </Typography>
            <p className="p-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Grid xs={5}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
                className="naz-wright-buttons"
              >
                View Services
              </Button>
            </Grid>
          </Box>
          <Copyright sx={{ mt: 4 }} />
        </Grid>
        <Grid xs={6} className="w-100 main-image-bg">
          <img src={mainImage} width={"100%"} />
        </Grid>
        <BasicSpeedDial />
      </header>
    </div>
  );
}

export default App;
