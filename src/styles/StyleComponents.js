import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

export const Titulo = styled.h4`  
  color: ${theme.color.title};
  font-size: ${theme.fontSize.title};
  font-weight: ${theme.fontWeight.title};
  margin: ${theme.margin.title};
`;

export const Poster = styled.section`
  width: 90%;
  margin: 50px 5%;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  `;

  