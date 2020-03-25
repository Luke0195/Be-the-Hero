import React, {useState} from 'react';

import Header from './Header';

function App() {
  
  const [counter, setCounter] = useState(0);
  
  function incremetar(){
    setCounter(counter + 1 );
  }

  return (
    <div>
    <Header>Contador : {counter} </Header>
    <button onClick={incremetar}>Incrementar </button>
    </div>

   
  );
}

export default App;
