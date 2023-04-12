import React from 'react';
import Typography from '@mui/material/Typography';
import { Slider } from './templatecard/imageCard';
import { Iniciobanner } from './bannercard/template';
import { Iniciolistapet } from './listapet/template';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


export const Iniciopage = () => {


 

return (

<div >
<section>
<Slider/>
</section>
<section className='InicioMobile'>


<Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2} columns={16}>
    <Grid item xs={8}>

    <br/>
    <Typography variant="h3" > Adoção de cães: como e onde adotar </Typography>
    <br/>
    <Iniciobanner/>   
    </Grid>
    <Grid item xs={8}>
    <Iniciolistapet/>
    </Grid>
    </Grid>
</Box>

 


</section>
</div>


);


}
