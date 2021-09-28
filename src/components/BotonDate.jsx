import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import moment from 'moment';
import { styled } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent:'center',
   '&:focus': {
      background: 'yellow',
      color: 'blue',
    },
    marginLeft:80,
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));



// const BootstrapButton = styled(Button)({
//   boxShadow: 'none',
//   textTransform: 'none',
//   fontSize: 16,
//   padding: '6px 12px',
//   border: '1px solid',
//   lineHeight: 1.5,
//   backgroundColor: '#0063cc',
//   borderColor: '#0063cc',
//   fontFamily: [
//     '-apple-system',
//     'BlinkMacSystemFont',
//     '"Segoe UI"',
//     'Roboto',
//     '"Helvetica Neue"',
//     'Arial',
//     'sans-serif',
//     '"Apple Color Emoji"',
//     '"Segoe UI Emoji"',
//     '"Segoe UI Symbol"',
//   ].join(','),
//   '&:hover': {
//     backgroundColor: '#0069d9',
//     borderColor: '#0062cc',
//     boxShadow: 'none',
//   },
//   '&:active': {
//     boxShadow: 'none',
//     backgroundColor: '#0062cc',
//     borderColor: '#005cbf',
//   },
//   '&:focus': {
//     boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
//   },
// });


export default function BotonDate({detalles,fecha, setFecha, setMotivo}) {
  const classes = useStyles();

  const [presionado, setPresionado] = useState(false)

  const handleclick = (date) => {
    setMotivo("")
    setPresionado(true)
    setFecha(date)
    console.log(date);
  }

  return (
    <div className={classes.root}>
      GAP
      <ButtonGroup
        color="secondary"
        aria-label="outlined secondary button group"
      >
        {detalles?.map((el) => (
            <Button
              color="secondary"
              onClick={() => handleclick(el?.FECHA_CARGA)}
              // style={{ backgroundColor: "black" }}
            >
              {" "}
              <>
                {el?.FECHA_CARGA} {el?.GAP.toFixed(2)}%
              </>
            </Button>
            // <BootstrapButton variant="contained" disableRipple>
            //   Bootstrap
            // </BootstrapButton>
        ))}
      </ButtonGroup>
    </div>
  );
}