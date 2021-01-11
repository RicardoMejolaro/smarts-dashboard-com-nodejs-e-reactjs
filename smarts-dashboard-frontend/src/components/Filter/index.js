import React, { useEffect, useContext } from 'react';

/*Contexto global*/
import GlobalStateContext from "../../global/GlobalStateContext";

/*Hooks Customizados*/
import { useForm } from '../../hooks/useForm';

//Tags styleds
import {
  FiltersContainer,
  TitleButtonContainer,
  FilterTitle,
  SortingFiltersContainer,
  FilterButton,
  FilterByDatesContainer,
  LabelInput,
  FilterInput,
  FormButton
} from './styles'

export default function Filter() {
  const { states, setters, requests } = useContext(GlobalStateContext)
  const customers = states.allCustomers;

  //Hook Formulário
  const { form, onChange, resetForm } = useForm({ start: '', final: '' });

  //Busca por datas
  const searchingCustomersByDates = (event) => {
    event.preventDefault();
    const firstDate = Date.parse(form.start)
    const lastDate = Date.parse(form.final)

    const filteredByDate = customers.filter(customer => {
      return Date.parse(customer.registered) >= firstDate && Date.parse(customer.registered) <= lastDate
    })

    resetForm()
    if(filteredByDate.length === 0) {
      const notFoundArray = [{_id: 'notFound'}]
      setters.setFilteredCustomers(notFoundArray)
    } else {
      setters.setFilteredCustomers(filteredByDate)
    }
  }

  //Busca por maior e menor budget
  const searchingByBudget = (value) => {
    //Separando os valores e tranformando e numeros
    const budgets = customers.map(item => {
      return Number(item.budget.slice(1, 4))
    })

    //Encontrando o maior ou menor
    const searchValue = budgets.reduce((a, b) => {
      if (value === 'bigger') {
        return Math.max(a, b);
      } else {
        return Math.min(a, b);
      }
    })

    //Localizando o item
    const filteredByBudget = customers.filter(customer => {
      return customer.budget.includes(String(searchValue))
    })
    setters.setFilteredCustomers(filteredByBudget)
  }

  //Ordenação 
  const orderCustomers = (order) => {
    let orderedCustomers = []
    if (order === 'growing') {
      orderedCustomers = customers.sort((a, b) => {
        if (a.name.first < b.name.first) {
          return -1;
        }
        if (a.name.first > b.name.first) {
          return 1;
        }
        return 0;
      })
    }
    if (order === 'decreasing') {
      orderedCustomers =  customers.sort((a, b) => {
        if (a.name.first > b.name.first) {
          return -1;
        }
        if (a.name.first < b.name.first) {
          return 1;
        }
        return 0;
      })
    }

    setters.setFilteredCustomers(orderedCustomers)
  }

  //Limpa filtros
  const clearFilters = () => {
    setters.setFilteredCustomers([{_id: '1'}])
  }

  useEffect(() => {
    requests.getAllCustomers()
  }, [requests])

  return (
    <FiltersContainer>
      <TitleButtonContainer>
        <FilterTitle>Filtros: </FilterTitle>
        <FilterButton onClick={clearFilters}>Limpar Filtros</FilterButton>
      </TitleButtonContainer>

      <SortingFiltersContainer>
        <FilterButton onClick={() => searchingByBudget('small')}>Menor Budget</FilterButton>
        <FilterButton onClick={() => searchingByBudget('bigger')}>Maior Budget</FilterButton>
        <FilterButton onClick={() => orderCustomers('growing')}>A - Z</FilterButton>
        <FilterButton onClick={() => orderCustomers('decreasing')}>Z - A</FilterButton>
      </SortingFiltersContainer>

      <FilterByDatesContainer onSubmit={searchingCustomersByDates}>
        <LabelInput>Início</LabelInput>
        <FilterInput
          type={'date'}
          value={form.start}
          name={'start'}
          onChange={onChange}
          required
        />
        <LabelInput>Fim</LabelInput>
        <FilterInput
          type={'date'}
          value={form.final}
          name={'final'}
          onChange={onChange}
          required
        />
        <FormButton>Buscar</FormButton>
      </FilterByDatesContainer>

    </FiltersContainer>
  );
}