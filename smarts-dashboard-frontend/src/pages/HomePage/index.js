import React, { useState, useEffect, useContext } from 'react';

//Serviços
import api from '../../services/api';

/*Contexto global*/
import GlobalStateContext from "../../global/GlobalStateContext";

//Componentes
import CustomerCard from '../../components/CustomerCard';
import Filter from '../../components/Filter'

//Tags styleds
import {
  MainContainer,
  DashboardContainer,
  Title,
  DataContainer,
  PaginateButton,
  PaginateTitle,
  PaginateTitleActual
} from './styles'

/*Componentes */
import Loading from '../../components/Loading';

export default function HomePage() {
  const { states } = useContext(GlobalStateContext)
  const [customers, setCustomers] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [beforeButtom, setBeforeButtom] = useState(false)
  const [nextButtom, setNextButtom] = useState(true)


  //Requisição a API
  const getCustomers = (currentPage) => {
    api.get(`/customers?page=${currentPage || 1}`).then((res) => {
      setTotalPages(res.data.totalPages)
      setCustomers(res.data.customers)

    }).catch(err => { console.log(err) })
  }

  //Paginação
  const beforePage = (page) => {
    let currentPage = Number(page)
    let beforePage = 0

    if (currentPage !== 1 && currentPage !== 2) {
      setBeforeButtom(true)
      beforePage = currentPage -= 1
      setPage(beforePage)
      getCustomers(beforePage);

    } else if (currentPage === 2) {
      setBeforeButtom(false)
      beforePage = currentPage -= 1
      setPage(beforePage)
      getCustomers(beforePage);

    }

    if (currentPage !== totalPages) {
      setNextButtom(true)
    }
  }

  const nextPage = (page) => {
    let currentPage = Number(page)
    let nextPage = 0

    if (currentPage !== totalPages && currentPage !== totalPages - 1) {
      setNextButtom(true)
      nextPage = currentPage += 1
      setPage(nextPage)
      getCustomers(nextPage);

    } else if (currentPage === totalPages - 1) {
      setNextButtom(false)
      nextPage = currentPage += 1
      setPage(nextPage)
      getCustomers(nextPage);

    }

    if (currentPage !== 1) {
      setBeforeButtom(true)
    }
  }

  useEffect(() => {
    getCustomers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <MainContainer>
      <DashboardContainer>

        <Title>Dashboard</Title>

        <Filter />

        {states.filteredCustomers.length > 0 && states.filteredCustomers[0]._id !== 'notFound' && states.filteredCustomers[0]._id !== '1' ?
          <h2>{`Resultados da pesquisa: ${states.filteredCustomers.length}`}</h2>
          :
          states.filteredCustomers.length > 0 && states.filteredCustomers[0]._id !== '1' &&
          <h2>{`Resultados da pesquisa: 0`}</h2>
        }

        <DataContainer view={states.filteredCustomers[0]._id}>
          {customers.length === 0 ?
            <Loading />
            :
            states.filteredCustomers.length > 0 && states.filteredCustomers[0]._id !== 'notFound' && states.filteredCustomers[0]._id !== '1' ?
              states.filteredCustomers.map(customer => {
                return (
                  <CustomerCard
                    key={customer._id}
                    customerId={customer._id}
                    image={customer.pictures[0].url}
                    name={customer.name.first + ' ' + customer.name.last}
                    email={customer.email}
                    age={customer.age}
                    company={customer.company}
                    budget={customer.budget}
                  />
                )
              })
              :
              states.filteredCustomers[0]._id !== 'notFound' &&
              customers.map(customer => {
                return (
                  <CustomerCard
                    key={customer._id}
                    customerId={customer._id}
                    image={customer.pictures[0].url}
                    name={customer.name.first + ' ' + customer.name.last}
                    email={customer.email}
                    age={customer.age}
                    company={customer.company}
                    budget={customer.budget}
                  />
                )
              })
          }
          {states.filteredCustomers.length === 1 && (states.filteredCustomers[0]._id === 'notFound' || states.filteredCustomers[0]._id === '1') &&
              <div>
              {beforeButtom &&
                <PaginateButton onClick={() => beforePage(page)}>Anterior</PaginateButton>
              }
              {nextButtom &&
                <PaginateButton onClick={() => nextPage(page)}>Próxima</PaginateButton>
              }
              <PaginateTitle>{`Página: `} <PaginateTitleActual>{page}</PaginateTitleActual>{` de ${totalPages}`}</PaginateTitle>
            </div>
          
          }

        </DataContainer>
      </DashboardContainer>
    </MainContainer >
  )
}