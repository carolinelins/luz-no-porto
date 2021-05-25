import React from 'react';
import "./styles.css"

import { makeStyles } from '@material-ui/core/styles';


import Box from '@material-ui/core/Box';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';

import MenuAdmin from '../../components/menu-admin';

import Footer from '../../components/footer-admin'

import MyDocument from '../../components/components pages/relatorio/pdf'
import FiltroLocalizacao from '../../components/components pages/relatorio/localizacao'
import FiltroPeriodo from '../../components/components pages/relatorio/periodo'
import { useFiltros } from '../../components/components pages/relatorio/providers/filtros'

import { PDFViewer } from '@react-pdf/renderer'


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
  //const { filtros, useFiltros } = useFiltros()

  return (
    <div className={classes.root}>

      <MenuAdmin />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <h1>Gerar relatório</h1>

            <div className="local1">
              <p>Localização</p>
            </div>

            <div id="local" className="filtro-local">
              <FiltroLocalizacao />
            </div>

            <div className="periodo1">
              <p>Período</p>
            </div>

            <div id="periodo" className="filtro-periodo">
              <FiltroPeriodo />
            </div>
            <div id="pdf">
              <PDFViewer height="483px">
                <MyDocument />
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
