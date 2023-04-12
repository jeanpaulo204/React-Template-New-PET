import React from 'react';
import { Slider } from './templatecard/imageCard';
import { Iniciobanner } from './bannercard/template';



export const Iniciopage = () => {


 

return (

<div >
<section>
  <Slider/>
</section>
<section className='InicioMobile'>
  <Iniciobanner/> 
</section>
</div>


);


}
