import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';

import MenuAdmin from '../../components/menu-admin';

import Footer from '../../components/footer-admin';
import FiltrosDados from '../../components/components pages/dados/filtros-dados';

import TabelaDados from '../../components/components pages/dados/tabela-dados';
import Card1 from '../../components/components pages/dados/card-dados';

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

export default function Dados() {
  const classes = useStyles();
  const [dataInicio, setDataInicio] = useState('2020-05-14');
  const [dataFim, setDataFim] = useState('2020-05-15');

  return (
    <div className={classes.root}>
      <MenuAdmin />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <h2>Dados Energeticos</h2>
          <Grid container>
            <Card1 className="col-sm-12" />
          </Grid>
          <div className="card bg-light text-dark m-3">
            <Grid container>
              <FiltrosDados
                className="col-sm-4"
                dataInicio={dataInicio}
                setDataInicio={setDataInicio}
                dataFim={dataFim}
                setDataFim={setDataFim}
              />
              <TabelaDados
                className="col-sm-8"
                dataInicio={dataInicio}
                dataFim={dataFim}
              />
            </Grid>
          </div>
          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>
    </div>
  );
}
