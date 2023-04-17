
import * as React from 'react';
import '../listapet/styles/App.css';
import Typography from '@mui/material/Typography';
import { Newslider } from '../../components/slider';
import homepet from './img/homepet.png';
import pipicat from './img/pipicat.png';
import doogfood from './img/doogfood.jpg';
import royalcanin from './img/royalcanin.png';

export const Iniciolistapet = () => {
  return (




<section>
<div className="skills">
<br/><br/>
        <Typography gutterBottom variant="h3" className="target" id="skills" component="div">
         Lista Parceiros!
        </Typography>     
</div>
<div className="Newslider">
  <Newslider primeiro={homepet} segundo={pipicat} terceiro={doogfood} quarto={royalcanin}/>
</div>
<br/><br/>
</section>


  );
};

export default Iniciolistapet;
