import React from 'react';
import { useHistory } from 'react-router-dom';

//Coordenador de rotas
import { goToCustomerDetails } from '../../routes/coordinator';

/*Tags Styleds*/
import {
  CardContainer,
  ImgContainer,
  CustomerImg,
  DescriptionContainer,
  LabelContainer,
  Label,
  DataContainer,
  Data
} from './styles';

export default function CustomerCard(props) {
  const history = useHistory();

  return (
    <CardContainer onClick={() => goToCustomerDetails(history, props.customerId)}>

      <ImgContainer>
        <CustomerImg
          src={props.image}
          alt={'Imagem do cliente'}
        />
      </ImgContainer>

      <DescriptionContainer>

        <LabelContainer>
          <Label>Nome: </Label>
          <Label>Email: </Label>
          <Label>Idade: </Label>
          <Label>Company: </Label>
          <Label>Budget: </Label>
        </LabelContainer>

        <DataContainer>
          <Data>{props.name}</Data>
          <Data>{props.email}</Data>
          <Data>{props.age}</Data>
          <Data>{props.company}</Data>
          <Data>{props.budget}</Data>
        </DataContainer>

      </DescriptionContainer>
    </CardContainer>
  )
}