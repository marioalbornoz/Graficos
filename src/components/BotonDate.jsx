import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent:'center',
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
          <Tooltip title={el?.FECHA_CARGA}>
            <Button
              onClick={() => handleclick(el?.FECHA_CARGA)}
              // style={{ backgroundColor: "black" }}
            >
              {el?.GAP.toFixed(2)}%
            </Button>
          </Tooltip>
        ))}
      </ButtonGroup>
    </div>
  );
}