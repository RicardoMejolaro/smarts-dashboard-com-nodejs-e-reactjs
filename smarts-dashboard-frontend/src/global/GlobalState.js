import React, { useState } from "react";

/*Serviços*/
import api from '../services/api';

/*Context*/
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [allCustomers, setAllCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([{_id: '1'}]);

  const getAllCustomers = () => {
    api.get('/customers')
    .then(res => {
      setAllCustomers(res.data.customers)
    })
    .catch(error => {
      console.log(error)
    })
  }
  
  const states = { allCustomers, filteredCustomers };
  const setters = { setAllCustomers, setFilteredCustomers };
  const requests = { getAllCustomers };

  const data = { states, setters, requests };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;