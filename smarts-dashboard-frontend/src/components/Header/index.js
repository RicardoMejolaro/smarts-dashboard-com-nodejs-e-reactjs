import { Route, useHistory } from 'react-router-dom';

/*Coordenador de rotas */
import { goToHome, goBack } from "../../routes/coordinator";

//Icons Material UI
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

/*Imagens*/
import logo from '../../assets/img/logo.png';

/*Tags styleds*/
import {
  HeaderContainer,
  Logo,
  ButtonsContainer,
} from './styles';

export default function Header() {
  const history = useHistory()

  return (
    <HeaderContainer>
        <Logo src={logo} onClick={() => goToHome(history)}/>

      <ButtonsContainer onClick={() => goBack(history)}>
        <Route exact path={'/customer/:id'}>
          <ArrowBackIcon fontSize="large" style={{ color: "#99225C" }}  />
          Voltar
        </Route>
      </ButtonsContainer>
    </HeaderContainer>
  );
}