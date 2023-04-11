import React from 'react';
import Typography from '@mui/material/Typography';
import { Btn } from '../../../components/btn';


export const BannerOptions = () => {



  
return (


  <div className="banner_options">
  <div className="banner1">
     <div className="banner_title"></div>
     <Typography variant="h6" gutterBottom>Como funciona? </Typography>
     <Typography variant="subtitle2" gutterBottom>Para adotar cachorro, não é necessário ter muito, o importante é oferecer amor, carinho e alguns cuidados para que ele tenha uma vida plena. Nesse caso, ao ir em uma ONG pegar um pet, é provável que queiram saber sobre a sua vida, profissão e se você tem todos os recursos necessários a fim de garantir qualidade de vida ao cão.</Typography>
     <Btn texto="CLIQUE E SAIBA MAIS"  />
  </div>
  <div className="banner2">
     <Typography variant="h6" gutterBottom>Onde adotar um pet?</Typography>
     <Typography variant="subtitle2" gutterBottom>Percebeu que quer adotar um animalzinho, mas não sabe onde pode encontrar ONGs de animais? Não se preocupe. No site Adote Pet você pode tirar suas principais dúvidas e preencher o formulário de interesse.</Typography>
     <Btn texto="ADOTE PET"  />
 </div>
 <div className="banner3">
     <Typography variant="h6" gutterBottom>Horario De Atendimento</Typography>
     <div className="banner_Friday">Segunda a Sexta   <span></span>       8.00 - 17.00</div>
     <div className="banner_Saturday">Sabado          <span></span>         8.00 - 17.00</div>
     <div className="banner_Sunday">Domingo           <span></span>      10.00 - 14.00</div>
 </div>
</div>


);


}