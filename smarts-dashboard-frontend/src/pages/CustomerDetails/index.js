import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//Mapa Api do Google
// import Map from '../../components/MapContainer';

//Serviços
import api from '../../services/api';

/*Componentes */
import Loading from '../../components/Loading';
import Carousel from '../../components/Carousel';

//Material UI icones
import TimelineIcon from '@material-ui/icons/Timeline';

//Tags styleds
import {
  MainContainer,
  DetailsContainer,
  Title,
  TitleName,
  TitleSection,
  InfoContainer,
  InfoDataContainer,
  Label,
  CustomerInfo,
  TimelineContainer,
  TimelineCard,
  TimelineDataContainer,
  TimelineTitle,
  TimelineData,
  ImagesContainer,
  SectionMapContainer,
  MapIframe
} from './styles'

let orderedBydate = []

export default function CustomerDetails() {
  window.document.title = "Detalhes"
  const [customer, setCustomer] = useState({})
  const { id } = useParams();

  //Requisição a API
  useEffect(() => {
    api.get(`/customer/${id}`).then((res) => {
      setCustomer(res.data.customer)

      //Organizador de data da linha do tempo
      orderedBydate = res.data.customer.contactTimeline.sort((a, b) => {
        if (Date.parse(a.date) < Date.parse(b.date)) {
          return -1;
        }
        if (Date.parse(a.date) > Date.parse(b.date)) {
          return 1;
        }
        return 0;
      })

    }).catch(err => { console.log(err) })
  }, [id])


  return (
    <MainContainer>
      {Object.entries(customer).length > 0 &&
        <Title>Detalhes cliente: <TitleName>{customer.name.first + ' ' + customer.name.last}</TitleName></Title>
      }
      {Object.entries(customer).length === 0 ? <Loading /> :
        <DetailsContainer>

          <InfoContainer>
            <TitleSection>Descrição</TitleSection>
            <InfoDataContainer>
              <Label>Nome: </Label>
              <CustomerInfo>{customer.name.first + ' ' + customer.name.last}</CustomerInfo>
            </InfoDataContainer>

            <InfoDataContainer>
              <Label>Company: </Label>
              <CustomerInfo>{customer.company}</CustomerInfo>
            </InfoDataContainer>

            <InfoDataContainer>
              <Label>Email: </Label>
              <CustomerInfo>{customer.email}</CustomerInfo>
            </InfoDataContainer>

            <InfoDataContainer>
              <Label>Telefone: </Label>
              <CustomerInfo>{customer.phone}</CustomerInfo>
            </InfoDataContainer>

            <InfoDataContainer>
              <Label>Budget: </Label>
              <CustomerInfo>{customer.budget}</CustomerInfo>
            </InfoDataContainer>

            <InfoDataContainer>
              <Label>Canal de comunicação: </Label>
              <CustomerInfo>{customer.channel}</CustomerInfo>
            </InfoDataContainer>

            <InfoDataContainer>
              <Label>Cliente desde: </Label>
              <CustomerInfo>{new Intl.DateTimeFormat('pt-BR').format(Date.parse(customer.registered))}</CustomerInfo>
            </InfoDataContainer>

          </InfoContainer>

          <ImagesContainer>
            <TitleSection>Galeria de Fotos</TitleSection>
            <Carousel images={customer.pictures} />
          </ImagesContainer>

          <TimelineContainer>
            <TitleSection>Linha do tempo de contatos</TitleSection>
            {orderedBydate.length > 0 ? orderedBydate.map(contact => {
              return (
                <TimelineCard key={contact.id}>
                  <TimelineIcon style={{ color: '#FFFFFF' }} />
                  <TimelineDataContainer>
                    

                    <TimelineTitle>Corretor: </TimelineTitle>
                    <TimelineData>{contact.broker}</TimelineData>

                    <TimelineTitle>Data: </TimelineTitle>
                    <TimelineData>{new Intl.DateTimeFormat('pt-BR').format(Date.parse(contact.date))}</TimelineData>
                  </TimelineDataContainer>
                </TimelineCard>
              )
            }) : 
              customer.contactTimeline.map(contact => {
                return (
                  <TimelineCard key={contact.id}>
                    <TimelineIcon style={{ color: '#FFFFFF' }} />
                    <TimelineDataContainer>
                      
  
                      <TimelineTitle>Corretor: </TimelineTitle>
                      <TimelineData>{contact.broker}</TimelineData>
  
                      <TimelineTitle>Data: </TimelineTitle>
                      <TimelineData>{new Intl.DateTimeFormat('pt-BR').format(Date.parse(contact.date))}</TimelineData>
                    </TimelineDataContainer>
                  </TimelineCard>
                )
              })
            }

          </TimelineContainer>

          <SectionMapContainer>
            <TitleSection>Localização</TitleSection>
            <MapIframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.9848305409087!2d95.43789031454278!3d36.11822731349015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDA3JzA1LjYiTiA5NcKwMjYnMjQuMyJF!5e0!3m2!1spt-BR!2sbr!4v1610330185494!5m2!1spt-BR!2sbr" width="300" height="250" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></MapIframe>

              * Mapa real será implementado futuramente, visto que a api do google gera custos. Localização fixa do primeiro cliente para todos!


              {/*
                Em breve será implementado, problemas de custo da API KEY             
                <Map latitude={customer.latitude} longitude={customer.longitude} localName={customer.address}/> 
              */}
          </SectionMapContainer>
        </DetailsContainer>
      }
    </MainContainer>
  );
}