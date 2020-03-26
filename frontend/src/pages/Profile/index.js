import React, {useState,useEffect} from 'react';
import { Link, useHistory} from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

function Profile(){
  const [incidents, setIncidents] = useState([]);
  
  const history = useHistory();

  const ongId= localStorage.getItem('ongId')
  const ongName= localStorage.getItem('ongName'); // Pegando o nome da ong pelo localStorage

  useEffect(() => {

    api.get('profile', {
      headers:{
        Authorization: ongId,
      } 
    }).then(response =>{
      setIncidents(response.data);
    })
  },[ongId]);

  async function  handleDeleteIncident(id){
    try{
        await api.delete(`incidents/${id}`, {
          headers:{
            Authorization: ongId
          }
        });
        
        setIncidents(incidents.filter(incident => incident.id!==id));
    }catch{
      alert('Erro ao deletar caso tente novamente');
    }

  }

  function handleLogout(){
    localStorage.clear(); // Esse metódo limpa todas as informações do localStorage
    history.push('/');
  }


  return (
     <div className="profile-container">
       <header>
            <img src={logoImg} alt="Logo da empresa"/>
            <span> Bem-vinda, {ongName} </span>
          
            <Link  className="button" to="/incidents/new"> Cadastrar novo Caso</Link>
            <button  onClick={handleLogout}type="button">
              <FiPower size={18} color="#E02041"/>
            </button>
       </header>

       <h1> Casos cadastrados </h1>

       <ul>
         {incidents.map(incident =>(
            <li key={incident.id}>
            <strong>CASO</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO</strong>
            <p>{incident.description}</p>

            <strong> Valor </strong>
            <p> {Intl.NumberFormat('pt-BR',{ style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

            <button  onClick={() => handleDeleteIncident(incident.id)} type="button">
              <FiTrash2 size={20} color="#a8a8b3"/>
            </button>
        </li>
         ))}
       </ul>
     </div>
  )
}

export default Profile;