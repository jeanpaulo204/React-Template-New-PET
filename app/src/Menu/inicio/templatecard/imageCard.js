import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { BannerOptions } from './card-box/bannerOptions';


export const Slider = () => {


 

return (

  <section className="banner">
  <div className="container column">

      <Box className="Box" sx={{ width: '100%', maxWidth: 500 }}>
     
      <Typography className="Branco" variant="h2"  gutterBottom>
      De Uma Oportunidade Para Quem Precisa!
      </Typography>
     
      <Typography className="Branco" variant="h4"  gutterBottom>
      Por que adotar? Ao adotar, você ajuda a reduzir o número de cães e gatos abandonados..
      </Typography>
      </Box>

<BannerOptions/>

  </div>
</section> 





);


}