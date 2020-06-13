import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BarraNavegacion from './components/BarraNavegacion';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import PaginaGeneral from './components/PaginaGeneral';


const App = () => {

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <BarraNavegacion />

        <Switch>
        <Route exact path='/' render={() =><BarraNavegacion />}></Route>
        <Route path='/:contenido/trending/page/:number' componente={PaginaGeneral}></Route>
        </Switch>
        
      </ThemeProvider>
       
    </Router>
  );
}

export default App;
