import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import Navbar from "./components/Navbar";
import { Container } from "@material-ui/core";
// import VerticalBar from "./components/VerticalBar";
import IntervalBar from "./components/IntervalBar";
import ChartBar from "./components/ChartBar";
// import HideAppBar from "./components/TopBar";
// import MiniDrawer from "./components/MiniCajon";
import DatePicker from "./components/Date";
import HideAppBar from "./components/TopBar";
import BotonDate from "./components/BotonDate";

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(10)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const [area, setArea] = useState("")
  const [color, setColor] = useState("")
  const classes = useStyles();
  // Tema
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: light)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <HideAppBar />
        {/* <MiniDrawer /> */}
        <Container maxWidth="false">
          <div className={classes.root}>
            <BotonDate />
            <Grid container spacing={9}>
              <Grid items xs={1}></Grid>
              <Grid
                item
                xs={area ? 4 : 10}
                alignContent="center"
                justifyContent="center"
              >
                {/* <Paper className={classes.paper}>
                xs=8 lore dsjndsdjdsndjsndjdn
              </Paper> */}
                {/* <VerticalBar /> */}

                <DatePicker />
                <IntervalBar
                  area={area}
                  setArea={setArea}
                  color={color}
                  setColor={setColor}
                />
              </Grid>
              <Grid
                item
                xs={area ? 6 : 0}
                alignContent="center"
                justifyContent="center"
              >
                {area ? (
                  <ChartBar area={area} color={color} setColor={setColor} />
                ) : null}
                {/* <Chartbar /> */}
              </Grid>
              <Grid items xs={1}></Grid>
            </Grid>
          </div>
        </Container>
      </ThemeProvider>
      {/* <Navbar /> */}
    </>
  );
}

export default App;
