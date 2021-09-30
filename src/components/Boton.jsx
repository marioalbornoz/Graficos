import React from 'react';
import { createTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';
import "animate.css"


const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '0 12px',
    border: '1px solid',
    borderRadius:25,
    lineHeight: 1.5,
    backgroundColor: 'white',
    borderColor: 'primary',
    color:'black',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: 'white',
      borderColor: '#black',
      color:'black',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: 'white',
      borderColor: 'black',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.1rem #80d8ff',
    },
  },
})(Button);

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createTheme({
  palette: {
    primary: green,
  },
});

export default function Boton({detalles,fecha, setFecha, setMotivo}) {
  const classes = useStyles();


  const handleclick = (date) => {
    setMotivo("")
    setFecha(date)
    console.log(date);
  }

  return (
    <div style={{ paddingLeft:'8%', paddingTop:30, paddingBottom:0 }}>
      {detalles?.map((el) => (
        el.FECHA_CARGA ===fecha  ? (<BootstrapButton
          variant="contained"
          color="primary"
          style={{backgroundColor:'#e1f5fe'}}
          disableRipple
          className={classes.margin}
          onClick={() => handleclick(el?.FECHA_CARGA)}
        >
          {
            <div style={{
                display:'flex', alignItems:'center', flexDirection:'column'
            }}>
            {/* <p className="animate__animated animate__flash" style={{marginTop:10, marginBottom:0}}>GAP <span style={{fontWeight:'bold'}}>{el?.GAP.toFixed(2)}%</span></p> */}
            <p style={{color:'gray', fontWeight:'bolder', marginTop:10, marginBottom:5}}>{el?.FECHA_CARGA}</p>
            {el.FECHA_CARGA === fecha ? <p className="animate__animated animate__flash" style={{marginTop:10, marginBottom:0}}>GAP <span style={{fontWeight:'bold'}}>{el?.GAP.toFixed(2)}%</span></p>: null}
            <p style={{fontSize:15, marginTop:5, marginBottom:10}}>OTIF {el?.OTIF}%</p>
               
            </div>
          }
        </BootstrapButton>) : (<BootstrapButton
        variant="contained"
        color="primary"
        disableRipple
        className={classes.margin}
        onClick={() => handleclick(el?.FECHA_CARGA)}
      >
        {
          <div style={{
              display:'flex', alignItems:'center', flexDirection:'column'
          }}>
          {/* {el.FECHA_CARGA === fecha ? <p className="animate__animated animate__flash" style={{marginTop:10, marginBottom:0}}>GAP <span style={{fontWeight:'bold'}}>{el?.GAP.toFixed(2)}%</span></p>: null} */}
          <p style={{color:'gray', fontWeight:'bolder', marginTop:10, marginBottom:5}}>{el?.FECHA_CARGA}</p>
          <p style={{marginTop:10, marginBottom:0}}>GAP <span style={{fontWeight:''}}>{el?.GAP.toFixed(2)}%</span></p>
          <p style={{fontSize:15, marginTop:5, marginBottom:10}}>OTIF {el?.OTIF}%</p>
             
          </div>
        }
      </BootstrapButton>)
      ))}
    </div>
  );
}