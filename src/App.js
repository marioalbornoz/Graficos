import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Navbar from "./components/Navbar";
import { Container } from "@material-ui/core";
// import VerticalBar from "./components/VerticalBar";
import IntervalBar from "./components/IntervalBar";
import ChartBar from "./components/ChartBar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(10),
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
  return (
    <>
      <Navbar />
      <Container maxWidth="false">
        <div className={classes.root}>
          <Grid container spacing={9}>
            <Grid items xs={1}></Grid>
            <Grid item xs={area ? 4:10} alignContent="center" justifyContent="center">
              {/* <Paper className={classes.paper}>
                xs=8 lore dsjndsdjdsndjsndjdn
              </Paper> */}
              {/* <VerticalBar /> */}
              <IntervalBar area={area} setArea={setArea} color={color} setColor={setColor}/>

              {/* { area ? <ChartBar area={area}/> : null} */}
              {/* <Chartbar /> */}
            </Grid><Grid item xs={area ? 6 : 0} alignContent="center" justifyContent="center">
              {/* <Paper className={classes.paper}>
                xs=8 lore dsjndsdjdsndjsndjdn
              </Paper> */}
              {/* <VerticalBar /> */}
              {/* <IntervalBar area={area} setArea={setArea}/> */}

              { area ? <ChartBar area={area} color={color} setColor={setColor}/> : null}
              {/* <Chartbar /> */}
            </Grid>
            <Grid items xs={1}></Grid>
            {/* <Grid item xs={1}>
              <Paper className={classes.paper}>xs=1</Paper>
            </Grid> */}
            {/* <Grid item xs={1}>
              <Paper className={classes.paper}>xs=1</Paper>
            </Grid>
            <Grid item xs={1}>
              <Paper className={classes.paper}>xs=1</Paper>
            </Grid>
            <Grid item xs={1}>
              <Paper className={classes.paper}>xs=1</Paper>
            </Grid>
            <Grid item xs={1}>
              <Paper className={classes.paper}>xs=1</Paper>
            </Grid>
            <Grid item xs={1}>
              <Paper className={classes.paper}>xs=1</Paper>
            </Grid>
            <Grid item xs={1}>
              <Paper className={classes.paper}>xs=1</Paper>
            </Grid>
            <Grid item xs={1}>
              <Paper className={classes.paper}>xs=1</Paper>
            </Grid>
            <Grid item xs={1}>
              <Paper className={classes.paper}>xs=1</Paper>
            </Grid>
            <Grid item xs={1}>
              <Paper className={classes.paper}>xs=1</Paper>
            </Grid>
            <Grid item xs={1}>
              <Paper className={classes.paper}>xs=1</Paper>
            </Grid>
            <Grid item xs={1}>
              <Paper className={classes.paper}>xs=1</Paper>
            </Grid> */}
          </Grid>
        </div>
      </Container>
    </>
  );
}

export default App;
