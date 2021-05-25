import React from 'react';

import { makeStyles } from '@material-ui/core/styles';


import Box from '@material-ui/core/Box';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';

import MenuAdmin from '../../components/menu-admin';

import Footer from '../../components/footer-admin'
import SeleLocatario from '../../components/components pages/dados/seleLocatario';

import Table1 from '../../components/components pages/dados/table1';


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


  return (
    <div className={classes.root}>

      <MenuAdmin />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <SeleLocatario />
            <Table1 />
          </Grid>
          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>
    </div>
  );
}
