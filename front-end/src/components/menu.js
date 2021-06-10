import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import DashboardIcon from '@material-ui/icons/Dashboard';
import BarChartIcon from '@material-ui/icons/BarChart';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const mainListItems = (
  <div>
    <ListItem button component="a" href="/" >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component="a" href="/pages/dados" >
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Dados" />
    </ListItem>
    <ListItem button component="a" href="/pages/consumo" >
      <ListItemIcon>
        <FlashOnIcon />
      </ListItemIcon>
      <ListItemText primary="Consumo Energético" />
    </ListItem>
    <ListItem button component="a" href="/pages/relatorio" >
      <ListItemIcon>
        <LibraryBooksIcon />
      </ListItemIcon>
      <ListItemText primary="Relatório" />
    </ListItem>
   
  </div>
);

export const secondaryListItems = (
  <div>
   <ListItem button>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Log Out" />
    </ListItem>
  </div>
);