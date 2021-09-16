import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function BotonDate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <ButtonGroup size="small" aria-label="small outlined button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */}
      <ButtonGroup
        color="secondary"
        aria-label="outlined secondary button group"
      >
        <Button>70%</Button>
        <Button>73%</Button>
        <Button>82%</Button>
        <Button>80%</Button>
        <Button>76%</Button>
        <Button>89%</Button>
        <Button>91%</Button>
        <Button>82%</Button>
        <Button>87%</Button>
        <Button>80%</Button>
        <Button>99%</Button>
        <Button>79%</Button>
      </ButtonGroup>
      {/* <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */}
    </div>
  );
}