import React, { Component, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import Moves from './components/Map'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper_header: {
    padding: theme.spacing(2),
    //textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  alerta: {
    marginTop: theme.spacing(2),
    color: "#fff", 
    fontWeight: 500
  }
}));

export default function App() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper} style={{backgroundColor: "#222", color: "#fff"}}>
              <h1>CORONAVIRUS ARGENTINA</h1>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <MuiAlert severity="error" elevation={6} variant="filled">
              LA OMS DECLARÓ EL CORONAVIRUS COMO PANDEMIA
            </MuiAlert>
            <MuiAlert severity="info" elevation={6} variant="filled" className={classes.alerta}>
             El Gobierno ultima los detalles del decreto que impondrá la cuarentena obligatoria
            </MuiAlert>
          </Grid>
          <Grid item xs={12} sm={4}>
            {/* ----- */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <Paper className={classes.paper} style={{fontSize: "1.2em", backgroundColor: "#222", color: "rgb(112, 168, 0)"}}>
                  <h2>CONFIRMADOS <br></br> 21</h2>
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
                  <h2>TOTAL MUNDO <br></br> 124.663</h2>
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
