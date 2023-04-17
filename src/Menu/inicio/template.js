import React from 'react';
import Typography from '@mui/material/Typography';
import { Slider } from './templatecard/imageCard';
import { Iniciobanner } from './bannercard/template';
import { Iniciolistapet } from './listapet/template';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';


export const Iniciopage = () => {


 

return (


<Box sx={{ width: '100%' }}>
<Slider/>


    <Grid   className='InicioMobile'>
<br/>   
    <Typography variant="h3" > Adoção de cães: como e onde adotar </Typography>
<br/>
        <Iniciobanner/>   
        <Iniciolistapet/>
 
    </Grid>
</Box>



 





);


}
