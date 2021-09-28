import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import Navbar from "./components/Navbar";
import { Container, Typography } from "@material-ui/core";
// import VerticalBar from "./components/VerticalBar";
import IntervalBar from "./components/IntervalBar";
import ChartBar from "./components/ChartBar";
// import HideAppBar from "./components/TopBar";
// import MiniDrawer from "./components/MiniCajon";
import DatePicker from "./components/Date";
import HideAppBar from "./components/TopBar";
import Boton from "./components/Boton";

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import SimpleCard from "./components/Card";
import moment from "moment";

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
  const classes = useStyles();
  const [motivo, setMotivo] = useState("");
  const [responsable, guardarResponsable] = useState("");

  const [color, setColor] = useState("");
  const [detalles, setDetalles] = useState([]);
  const [fecha, setFecha] = useState("");

  const [cantidad, setCantidad] = useState([])

  useEffect(() => {
    setFecha(fecha || moment().subtract(1, 'days').format("YYYY-MM-DD"))
  }, [])
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
            {motivo ? null : (
              <Grid container>
                {" "}
                {/* <Grid items xs={10} sm={10} lg={12} xl={12}> <Typography  variant="h5" style={{textAlign:'center'}}>{fecha}</Typography> </Grid> */}
                  
                  <Grid items xs={10} sm={10} lg={12} xl={12}>
                  {/* <BotonDate
                    detalles={detalles}
                    fecha={fecha}
                    setFecha={setFecha}
                    setMotivo={setMotivo}
                  /> */}
                  <Boton
                    detalles={detalles}
                    fecha={fecha}
                    setFecha={setFecha}
                    setMotivo={setMotivo}
                  />
                </Grid>{" "}
                {/* <Grid items xs={2} sm={12} lg={2} xl={4}>
                  {" "}
                  <DatePicker fecha={fecha} setFecha={setFecha} />{" "}
                </Grid> */}
              </Grid>
            )}
            <Grid container spacing={9}>
              {!motivo ? (
                <>
                  <Grid items xs={1} style={{ marginTop: 30 }}></Grid>
                  <Grid
                    item
                    xs={motivo ? 4 : 10}
                    alignContent="center"
                    justifyContent="center"
                    style={{ marginTop: 30 }}
                  >
                    <IntervalBar
                      motivo={motivo}
                      setMotivo={setMotivo}
                      color={color}
                      setColor={setColor}
                      detalles={detalles}
                      setDetalles={setDetalles}
                      fecha={fecha}
                      guardarResponsable={guardarResponsable}
                    />
                  </Grid>
                  <Grid items xs={1} style={{ marginTop: 30 }}></Grid>
                </>
              ) : (
                <>
                  {" "}
                  <Grid items xs={1} style={{ marginTop: 100 }}></Grid>{" "}
                  <Grid items xs={8} sm={6} style={{ marginTop: 100 }}>
                    {" "}
                    <ChartBar
                      motivo={motivo}
                      setMotivo={setMotivo}
                      color={color}
                      setColor={setColor}
                      responsable={responsable}
                      setCantidad={setCantidad}
                    />{" "}
                  </Grid>{" "}
                  <Grid items xs={2} sm={2} style={{ margin: 100 }}>
                    {/* { !motivo ? <p>Selecciones un intervalo</p> : <CustomText text={`${(motivo)}`} />} */}
                    <SimpleCard
                      motivo={motivo}
                      setMotivo={setMotivo}
                      responsable={responsable}
                      cantidad={cantidad}
                    />
                  </Grid>{" "}
                </>
              )}
            </Grid>
          </div>
        </Container>
      </ThemeProvider>
      {/* <Navbar /> */}
    </>
  );
}

export default App;
