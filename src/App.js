import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MuiAlert from '@material-ui/lab/Alert';
import socketIOClient from "socket.io-client";
import { URL } from './data/config';

import Tabla from './components/Tabla'
import Map from './components/Map'
import Estadistica from './components/Estadistica'

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
  },
  mapa: {
    [theme.breakpoints.down('xs', 'sm')]: {
      padding: '50px',
      height: '50vh'
    }
  },
  cargando: {
    fontSize: '15px',
    fontWeight: 300
  }
}));

export default function App() {
  const classes = useStyles();
  const [confirma, setConfirma] = useState({});

  const [markerPosition, setMarkerPosition] = useState({
    lat: -38.4160957,
    lng: -63.6166725
  });

  const cargando = 'cargando datos...'

  useEffect(() => {
    const socket = socketIOClient(URL);
    socket.on("FromTemperatura", e => {
      setConfirma(e)
    })
  }, [])
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Paper className={classes.paper} style={{ backgroundColor: "#222", color: "#fff", padding: '3px', lineHeight: '28px' }}>
            <h1>CORONAVIRUS ARGENTINA <br></br> <span style={{ fontSize: '12px' }}>ÚLTIMA ACTUALIZACIÓN: {confirma.date}</span></h1>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <MuiAlert severity="error" elevation={6} variant="filled">
            Disculpé las molestias! Si no carga los datos es por las miles de visitas que estamos recibiendo!
            </MuiAlert>
          <MuiAlert severity="info" elevation={6} variant="filled" className={classes.alerta}>
            {confirma.titulo ? confirma.titulo : 'Estamos mejorando para que tengan una mejor experiencia'}
          </MuiAlert>
        </Grid>

        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          {/* ----- */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Paper className={classes.paper} style={{ fontSize: "1em", backgroundColor: "#222", color: "rgb(112, 168, 0)" }}>
                <h2>CONFIRMADOS <br></br> {confirma.confirmados ? confirma.confirmados : <span className={classes.cargando}>{cargando}</span>}</h2>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Paper className={classes.paper} style={{ fontSize: "1em", backgroundColor: "#222", color: "rgb(230, 0, 0)", fontWeight: "bold" }}>
                <h2>FALLECIDOS <br></br> {confirma.fallecidos ? confirma.fallecidos : <span className={classes.cargando}>{cargando}</span>}</h2>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Paper className={classes.paper} style={{ backgroundColor: "#222", color: "rgb(112, 168, 0)" }}>
                <h2>RECUPERADOS <br></br> {confirma.recuperados ? confirma.recuperados : <span className={classes.cargando}>{cargando}</span>}</h2>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Paper className={classes.paper} style={{ backgroundColor: "#222", color: "rgb(112, 168, 0)" }}>
                <h2>ACTIVOS <br></br> {confirma.activos ? confirma.activos : <span className={classes.cargando}>{cargando}</span>}</h2>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Paper className={classes.paper} style={{ fontSize: "1em", backgroundColor: "#222", color: "rgb(230, 0, 0)", fontWeight: "bold" }}>
                <h2>TOTAL MUNDO <br></br> {confirma.total_mundo ? confirma.total_mundo : <span className={classes.cargando}>{cargando}</span>}</h2>
              </Paper>
            </Grid>
          </Grid>
          {/* ----- */}
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8} className={classes.mapa}>
          <Map markerPosition={markerPosition}> </Map>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Tabla />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Paper style={{padding: "15px", minHeight: "460px"}}>
            <Estadistica />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
