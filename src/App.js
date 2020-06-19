import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BarraNavegacion from './components/BarraNavegacion';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import PaginaGeneral from './components/PaginaGeneral';
import HomePage from './components/HomePage';

const dotenv = require('dotenv').config()

const movie = "movie";
const tv = "tv";

const App = () => {
// const dotenv = require('dotenv').config()
// console.log("dotenv" + JSON.stringify(dotenv))
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        

        <Switch>
        <Route exact path='/' component={BarraNavegacion}></Route>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/movie/trending/page/:number' component={() => <PaginaGeneral contenido={movie}/>}></Route>
        <Route path='/tv/trending/page/:number' component={() => <PaginaGeneral contenido={tv}/>}></Route>
        </Switch>
        
      </ThemeProvider>
       
    </Router>
  );
}

export default App;
