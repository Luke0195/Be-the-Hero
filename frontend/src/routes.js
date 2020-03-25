import  React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon  from './pages/Logon';
import Register from './pages/Register';

function Routes(){
  return(
     <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon}/>   {/*A rota principal da aplicação recebera o componente logon, a  propriedade exact não ira diferenciar as  rotas */}
        <Route path="/register" component={Register}/>
      </Switch>
     </BrowserRouter>
  )

}


export default Routes;