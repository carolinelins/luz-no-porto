import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import MenuAdmin from '../../components/menu-admin';

import Footer from '../../components/footer-admin';
import GraficoConsumo from '../../components/components pages/consumo/graficoConsumo';
import GraficoRateio from '../../components/components pages/consumo/graficoRateio';
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

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MenuAdmin />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {/* <Grid container spacing={3}>
            <div style={{width:'55rem'}}>
          <GraficoConsumo />
          </div> */}
          <GraficoConsumo className="col-sm-12 m-3 p-4" />
          {/* <div style={{width:'40rem'}}>
          <GraficoRateio />
          </div> */}
          <Grid container>
            <GraficoRateio className="col-sm-10 m-3 p-4" />
            <Card1 className="col-sm-2 m-3 p-4" />
          </Grid>
          {/* <div>
          <Card1 />
          </div> */}
          {/* </Grid> */}
          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>
    </div>
  );
}
