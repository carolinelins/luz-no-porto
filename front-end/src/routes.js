import React from 'react';

import { BrowserRouter,Switch,Route } from 'react-router-dom';

import Dashboard from './pages/dashboard';
import Dados from './pages/dados';
import Consumo from './pages/consumo';
import Relatorio from './pages/relatorio';

export default function Routes(){
    return(
       <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path='/pages/dados' exact component={Dados}/>
            <Route path='/pages/consumo' exact component={Consumo}/>
            <Route path='/pages/relatorio' exact component={Relatorio}/>

        </Switch>
       </BrowserRouter>  
    )
}