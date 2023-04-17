import React from 'react';
import { Iniciopage } from '../Menu/inicio/template';
import { Header } from '../Menu/components/header';
import { Footer } from '../Menu/components/footer'


const Inicio = () =>{
  return (
    <div>
      <Header/>
      <Iniciopage/>
      <Footer/>
    </div>

   

  );
}

export default Inicio;
