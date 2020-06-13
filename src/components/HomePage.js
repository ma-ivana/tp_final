import React, { useState, useEffect } from 'react';
import  styled from 'styled-components'; 
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Card from './Card';
import { ArrowRight } from '@styled-icons/feather/ArrowRight';
import PaginaGeneral from './PaginaGeneral';
import theme from '../styles/theme';
import { Titulo } from '../styles/StyleComponents';

const TitleSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  height: 100px;
`;

// const Titulo = styled.h4`  
//   color: ${theme.color.title};
//   font-size: ${theme.fontSize.title};
//   font-weight: ${theme.fontWeight.title};
//   margin: ${theme.margin.title};
// `;

const FlechaDerecha = styled(ArrowRight)`
  width: 23px;
  height: 23px;
  margin-bottom: 7px;
  color: ${theme.color.arrowToLoadFullContent};
`;

const Poster = styled.section`
  width: 90%;
  margin: 30px 5% ${props => props.title === "pelicula" ? '20px' : '50px'} 5%;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  `;



const HomePage = () => {
  
  console.log(theme.color.title)
  const [peliculasTendencia, setPeliculasTendencia] = useState([])
  const [flecha, setFlecha] = useState(false)
  let [contenido, setContenido] = useState('peliculas')
  const [seriesTendencia, setSeriesTendencia] = useState([])
  const api_key = process.env.API_KEY

  useEffect(() => {
      fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}&language=es-ar`)
      .then(res => res.json())
      .then(data => setPeliculasTendencia(data.results))
    }, [])

    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${api_key}&language=es-ar`)
      .then(res => res.json())
      .then(data => setSeriesTendencia(data.results))
    }, [])

    const handleClick = e => {
      setContenido(e.target.id)
      console.log("flechaPresionada " + contenido)
      setFlecha(true)
    }

  console.log("flecha " + flecha)
  console.log(peliculasTendencia);
  console.log(seriesTendencia);
  
  return (
      <>
        <TitleSection>
          <Titulo color="title" fontWeight="title" fontSize="title" m="title">Películas que son tendencia</Titulo>
          <FlechaDerecha onClick={handleClick} id='peliculas'/>
        </TitleSection>
                
        <Poster title='pelicula'>
          {peliculasTendencia.map((pelicula, i) => (
            i < 5 &&
            <Card key={pelicula.id} elementoID={pelicula.poster_path} titulo={pelicula.title}/>          
          ))}
        </Poster>

        <TitleSection >
          <Titulo>Series que son tendencia</Titulo>
          <FlechaDerecha onClick={handleClick} id='series'/>
        </TitleSection>
        <Poster title='serie'>
          {seriesTendencia.map((serie, i) => (
            i < 5 &&
            <Card key={serie.id} elementoID={serie.poster_path} titulo={serie.name}/>          
          ))}
        </Poster>
        
        {flecha && <PaginaGeneral contenido={contenido}/>}
        
        
        
        <Route exact path="/"></Route>
        
      </>
  )
}

//<Route path="/movie/trending/page/1"></Route>
        //<Route path="/tv/trending/page/1"></Route>
export default HomePage;