import React, { useState } from 'react';
import  styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';

import Busqueda from './Busqueda';
import { Home } from '@styled-icons/feather/Home';
import { Video } from '@styled-icons/feather/Video';
import { Tv } from '@styled-icons/feather/Tv';
import { Search } from '@styled-icons/feather/Search';
import PaginaSeries from './PaginaSeries';
import PaginaPeliculas from './PaginaPeliculas';
import theme from '../styles/theme';



const Nav = styled.nav`
  margin: 0;
  padding: 0;
  height: 60px;
  background-color: ${theme.color.navBarBackground};
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

    div {
      width: 20%;
      

      ul {
        margin-left: -12px;
        padding: 0;
        ${theme.ul.menuUl};
        justify-content: space-evenly;    
      }
    }
`;

const Inicio = styled(Home)`
  ${theme.navBarIcon.size}
  `;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  
  &:focus {
    color: ${theme.color.visitedLink};
  }
`;
      

const Peliculas = styled(Video)`
  ${theme.navBarIcon.size}
`;

const Series = styled(Tv)`
  ${theme.navBarIcon.size}
`;

const Lupa = styled(Search)`
  ${theme.navBarIcon.size}
`;



const BarraNavegacion = () => {

  const [page, setPage] = useState('home')

  const navBar = {
    home: <HomePage />,
    peliculas: <PaginaPeliculas />,
    series: <PaginaSeries />,
    busqueda: <Busqueda />
  }

  const handleClick = e => {
    console.log(e.target.id)
    setPage(e.target.id)
  }

  return (
    <>
    <Nav>
      <div>
        <ul>
        <li><StyledLink to="/"><Inicio id="home" onClick={handleClick}/></StyledLink></li>
        <li><StyledLink to="/movie"><Peliculas id="peliculas" onClick={handleClick}/></StyledLink></li>
        <li><StyledLink to="/tv"><Series id="series" onClick={handleClick}/></StyledLink></li>
        <li><Lupa id="busqueda" onClick={handleClick}/></li>
        </ul>
      </div>
    </Nav>

    <Route path="/" render={() => <>{navBar[page]}></>}></Route>
    </>
    
  )
}

export default BarraNavegacion;