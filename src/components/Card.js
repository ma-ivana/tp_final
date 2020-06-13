import React from 'react';
import  styled from 'styled-components'; 
import { BrowserRouter as Router } from 'react-router-dom';

const CardFrame = styled.div`
  width: 19.5%;
  height: auto;
  overflow: hidden;

    img {
      width: 100%;
      height: auto;
    }
  `;

const TituloElemento = styled.h6`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: white;
  font-size: 22px;
  font-weight: lighter;
  margin-top: 5px;
  text-align: center;
`;

const Card = ({ elementoID, titulo }) => {


  return (
      <CardFrame>
      <img src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${elementoID}`}/>
      <TituloElemento>{titulo}</TituloElemento>
      </CardFrame>
  )
}

export default Card;