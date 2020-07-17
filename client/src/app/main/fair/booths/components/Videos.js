import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  full_height: {
    height: '700px'
  }
});

export default function Videos() {
  const classes = useStyles();

  return (
    <div className={classes.full_height}>
      <h1>Videos GOES HERE</h1>
    </div>
  );
}
