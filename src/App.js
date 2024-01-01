import React from 'react';
import logo from './logo.svg';
import './App.css';
import Holamundo from './components/Holamundo';
import Saludar from './components/Saludar';
import Saludos from './components/Saludos';


function App() {


  const User = {
    nombre: "daniel",
    edad: "30",
    color: "negro"
    
  };

  const Saludosf = (nombre, edad, color) => {
    console.log("hola " + nombre);
    console.log(`hola ${nombre}, tiene ${edad} años, y su color favorito es el ${color}`)
  
  };
    
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      
        <Saludos userinfo={User} Saludosf={Saludosf} />
      </header>
    </div>
  );
}

export default App;
