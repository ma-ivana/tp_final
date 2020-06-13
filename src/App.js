import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BarraNavegacion from './components/BarraNavegacion';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import PaginaGeneral from './components/PaginaGeneral';

const dotenv = require('dotenv').config()



const App = () => {
// const dotenv = require('dotenv').config()
// console.log("dotenv" + JSON.stringify(dotenv))
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        

        <Switch>
        <Route exact path='/' render={() =><BarraNavegacion />}></Route>
        <Route path='/:contenido/trending/page/:number' componente={PaginaGeneral}></Route>
        </Switch>
        
      </ThemeProvider>
       
    </Router>
  );
}

export default App;
