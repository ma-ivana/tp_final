import React, { useState, useEffect } from 'react';
import  styled from 'styled-components'; 
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Card from './Card';
import theme from '../styles/theme';
import { Titulo, Poster } from '../styles/StyleComponents';
import Pagination from '@material-ui/lab/Pagination';


const NewPagination = styled(Pagination)`
  width: 100%;
  display: ${theme.display.displayFlexCenter};  
  font-size: 14px;
  font-weight: 300;
  
    ul {      
      li button {
          color: white;
      }
      div {
          color: white;
      }      
    }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  /* color: white; */
  
  &:visited, &:focus {
    /* color: ${theme.color.visitedLink}; */
    text-decoration: none;
  }
`;

const PaginaGeneral = (props) => {

  const [peliculasTendencia, setPeliculasTendencia] = useState([])
  const [seriesTendencia, setSeriesTendencia] = useState([])
  let [pageCount, setPageCount] = useState(1)
  const [page, setPage] = useState(1)
  const api_key = process.env.API_KEY

  useEffect(() => {
      
      fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}&language=es-ar&page=${pageCount}`)
      .then(res => res.json())
      .then(data => setPeliculasTendencia(data.results)) 
    
      fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${api_key}&language=es-ar&page=${pageCount}`)
      .then(res => res.json())
      .then(data => setSeriesTendencia(data.results))
    }, [pageCount])

  console.log(peliculasTendencia);
  console.log(seriesTendencia)
  
    const  handleChange = (e, value) => {
      setPageCount(value)
      setPage(value)
      console.log(value)
    }

    const TrendingMovies = () => {
      return (<>        
        <Titulo> Peliculas que son tendencia</Titulo>         
        <Poster >
          {peliculasTendencia.map(pelicula => (
            <Card key={pelicula.id} elementoID={pelicula.poster_path} titulo={pelicula.title}/>))}
        </Poster>
        </>)
    }

    const TrendingSeries = () => {
      return (<>
        <Titulo>Series que son tendencia</Titulo>
        <Poster >
          {seriesTendencia.map(serie => (
            <Card key={serie.id} elementoID={serie.poster_path} titulo={serie.name}/>            
          ))}
        </Poster> </>)
    }

  return (
    <>    
      {(props.contenido === 'peliculas') ?
        <TrendingMovies/>
         :        
        <TrendingSeries/>
        }
        
        
        <StyledLink to={(props.contenido === 'peliculas') ? `/movie/trending/page/${pageCount}` : `/tv/trending/page/${pageCount}`}><NewPagination count={1000} page={pageCount} onChange={handleChange}></NewPagination></StyledLink>

  </>
        
        //<Route exact path={(props.contenido === 'peliculas') ? `/movie/trending/page/${pageCount}` : `/tv/trending/page/${pageCount}`}></Route>
      
       // check porque hover URL muestra bien el nro de pág. pero URL bar, va una posición atrasada
     
  )
}

export default PaginaGeneral;