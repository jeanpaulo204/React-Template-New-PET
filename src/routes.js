import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Header } from '../src/Menu/components/header';
import { Footer } from '../src/Menu/components/footer'

import Inicio from "./pages/inicio";
import Adotar from "./pages/adotar";
import Denunciar from "./pages/denunciar";
import Informar from "./pages/informar";
// import Sobre from "./Sobre";
// import Usuario from "./Usuario";

const Rotas = () => {
   return(
       <BrowserRouter>
       <Header/>
            <Routes>
                <Route element = { <Inicio /> }  path="/" exact />  
                <Route element = { <Denunciar /> }  path="/denunciar" />  
                <Route element = { <Adotar /> }  path="/adotar-me" />  
                <Route element = { <Informar /> }  path="/informacoes" />  
            </Routes>   
        <Footer/>
       </BrowserRouter>
   )
}

export default Rotas;