import React from 'react';

//Tags styleds
import {
  MainContainer,
  ErrorMessage
} from './styles'

export default function ErrorPage() {
  window.document.title="Página não encontrada"

  return (
    <MainContainer>
      <ErrorMessage>Página não encontrada :(</ErrorMessage>
    </MainContainer>
  );
}