import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Inicio from "./pages/inicio";
import Denunciar from "./pages/denunciar";
// import Sobre from "./Sobre";
// import Usuario from "./Usuario";

const Rotas = () => {
   return(
       <BrowserRouter>
            <Routes>
                <Route element = { <Inicio /> }  path="/" exact />  
                <Route element = { <Denunciar /> }  path="/denunciar" />  
            </Routes>   
       </BrowserRouter>
   )
}

export default Rotas;