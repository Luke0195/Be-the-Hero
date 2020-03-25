import React from 'react';
import {FiLogIn} from 'react-icons/fi';


import './styles.css';

import logoImg  from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';


function Logon(){
  return(
     
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be the hero"/>
        
        <form>
          <h1>Faça seu logon</h1> 
          
          <input type="text" placeholder="Seu ID"/>
          <button class="button" type="submit">Entrar </button>
          <a  href="/register">
            <FiLogIn  size={16} color="#E02041"/>
            Não tenho cadastro
          </a>
        </form>
      </section>
      
      <img src={heroesImg } alt="Um grupo de pessoas se abraçando"/>
    </div>

  )
}

export default  Logon;