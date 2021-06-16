/* eslint-disable eqeqeq */
import React, { useState, useEffect } from 'react';
import './styles.css';

import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';

import MenuAdmin from '../../components/menu-admin';

import Footer from '../../components/footer-admin';

import MyDocument from '../../components/components pages/relatorio/pdf';
import Periodo from '../../components/components pages/relatorio/periodo';
import { useFiltros } from '../../components/components pages/relatorio/providers/filtros';
import Salas from '../../components/components pages/relatorio/salas';
import FiltroLocatario from '../../components/components pages/relatorio/empresa';
import FiltroDispositivo from '../../components/components pages/relatorio/dispositivo';

import { PDFViewer } from '@react-pdf/renderer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  title: {
    flexGrow: 1,
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));

export default function Relatorio() {
  const classes = useStyles();
  const { filtros } = useFiltros();
  const [dataInicio, setDataInicio] = useState('2021-05-01');
  const [dataFim, setDataFim] = useState('2021-05-31');

  useEffect(() => {
    if (filtros.dataInicio != dataInicio) {
      setDataInicio(filtros.dataInicio);
    }

    if (filtros.dataFim != dataFim) {
      setDataFim(filtros.dataFim);
    }
  }, [filtros.dataInicio, filtros.dataFim, dataInicio, dataFim]);

  return (
    <div className={classes.root}>
      <MenuAdmin />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container>
            <div className="card bg-light text-dark m-3 p-5">
              <h5>Filtros</h5>
              <div>
                <FiltroLocatario />
                <Salas />
                <FiltroDispositivo />
              </div>
              <div className="pt-5">
                <h5>Período</h5>
                <Periodo />
              </div>
            </div>

            <div id="pdf" className="card bg-light m-3 p-5">
              <h5>Visualização</h5>
              <PDFViewer height="483px" className="m-3">
                <MyDocument
                  sala={filtros.sala}
                  dataInicio={dataInicio}
                  setDataInicio={setDataInicio}
                  dataFim={dataFim}
                  setDataFim={setDataFim}
                />
              </PDFViewer>
            </div>
          </Grid>
          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>
    </div>
  );
}
