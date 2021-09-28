import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard({motivo, setMotivo, responsable, cantidad}) {
    // console.log(cantidad);
  const classes = useStyles();
  const reportMath = (arreglo) =>  {
    console.log(arreglo);
    const cantidad =  arreglo.map(el => el.CANTIDAD).reduce((el,acc) => el+acc, 0);
    console.log(cantidad);
    return (cantidad/arreglo.length);
  }


  const handleback = (e) => {
    e.preventDefault();
    setMotivo("");
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {responsable}
        </Typography>
        <Typography variant="h5" component="h2">
          {motivo}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          informacion
        </Typography>
        <Typography variant="body2" component="p">
        {/* {cantidad?.reduce( (el, acc)=> el.CANTIDAD+acc.CANTIDAD, 0)} */}
          <br />
          {/* {cantidad ? <p>{reportMath(cantidad)} reservas como media para los ultimos {cantidad.length} dias hábiles</p> : 'sin cantidad'} */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleback}>Atras</Button>
      </CardActions>
    </Card>
  );
}