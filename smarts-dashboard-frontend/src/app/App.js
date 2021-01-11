import Router from '../routes/router';
import { BrowserRouter } from 'react-router-dom';

//Componentes
import Header from '../components/Header';

/*Contexts*/
import GlobalState from "../global/GlobalState";

export default function App() {
  return (
    <GlobalState>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </GlobalState>
  );
}

