import React, { Component, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Moves from './components/Map'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function App() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper className={classes.paper} style={{backgroundColor: "#222", color: "#fff"}}>
              <h1>CORONAVIRUS ARGENTINA</h1>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            {/* ----- */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <Paper className={classes.paper} style={{fontSize: "1.2em", backgroundColor: "#222", color: "rgb(112, 168, 0)"}}>
                  <h2>CONFIRMADOS <br></br> 19</h2>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Paper className={classes.paper} style={{fontSize: "1.2em", backgroundColor: "#222", color: "rgb(230, 0, 0)", fontWeight: "bold"}}>
                  <h2>FALLECIDOS <br></br> 1</h2>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Paper className={classes.paper} style={{backgroundColor: "#222", color: "rgb(112, 168, 0)"}}>
                  <h2>SANADOS <br></br> 0</h2>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Paper className={classes.paper} style={{fontSize: "1.06em", backgroundColor: "#222", color: "rgb(230, 0, 0)", fontWeight: "bold"}}>
                  <h2>TOTAL MUNDO <br></br> 119.094</h2>
                </Paper>
              </Grid>
            </Grid>
            {/* ----- */}
          </Grid>
          <Grid item xs={12} sm={8}>
            <Moves />
          </Grid>
        </Grid>
      </div>
    );
 }
