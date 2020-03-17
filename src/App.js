import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MuiAlert from '@material-ui/lab/Alert';
import Axios from "axios";
import socketIOClient from "socket.io-client";

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
    const [data, setData] = useState({ items: {} });
    const [confirma, setConfirma] = useState({});

    useEffect(() => {
      const fetchData = async () => {
        const result = await Axios(
          'http://coronavirusargentina-env-1.eba-2zxmdesj.us-east-1.elasticbeanstalk.com/api/v1/coronavirus',
        );
        setData(result.data);
      };
      fetchData();
    }, []);

    useEffect( () => {
      const socket = socketIOClient('http://coronavirusargentina-env-1.eba-2zxmdesj.us-east-1.elasticbeanstalk.com');
      socket.on("FromTemperatura", e => {
        setConfirma(e)
      })
    }, [])
    return (
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Paper className={classes.paper} style={{backgroundColor: "#222", color: "#fff", padding: '3px', lineHeight: '28px'}}>
              <h1>CORONAVIRUS ARGENTINA <br></br> <span style={{fontSize: '12px'}}>ÚLTIMA ACTUALIZACIÓN: {confirma.date}</span></h1>
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
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Paper className={classes.paper} style={{fontSize: "1.2em", backgroundColor: "#222", color: "rgb(112, 168, 0)"}}>
                  <h2>CONFIRMADOS <br></br> {confirma.confirmados}</h2>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Paper className={classes.paper} style={{fontSize: "1.2em", backgroundColor: "#222", color: "rgb(230, 0, 0)", fontWeight: "bold"}}>
                  <h2>FALLECIDOS <br></br> {confirma.fallecidos}</h2>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Paper className={classes.paper} style={{backgroundColor: "#222", color: "rgb(112, 168, 0)"}}>
                  <h2>RECUPERADOS <br></br> {confirma.recuperados}</h2>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Paper className={classes.paper} style={{fontSize: "1.06em", backgroundColor: "#222", color: "rgb(230, 0, 0)", fontWeight: "bold"}}>
                  <h2>TOTAL MUNDO <br></br> {confirma.total_mundo}</h2>
                </Paper>
              </Grid>
            </Grid>
            {/* ----- */}
          </Grid>
          <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
            <Moves />
          </Grid>
        </Grid>
        </div>    
        );
 }
