import React from 'react';
import './styles/App.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export const Iniciolistapet = () => {
return (

<section>
<aside>
         <div class="widget">
             <div class="widget_title">
                 <div class="widget_title_text">Para Adoção!</div>
                 <div class="widget_title_bar"> </div>
             </div>
             <div class="widget_body">
             <div class="departmentscontent">
        <Box sx={{ flexGrow: 1 }}>
             <Grid container spacing={19} >
             <Grid item xs={4}>
             <div class="one" >     </div>
             
             </Grid>
             <Grid item xs={4}>
             <div class="two">     </div>
             
             </Grid>
             </Grid>
        </Box>
         <Box sx={{ flexGrow: 1 }}>
             <Grid container spacing={19} >
             <Grid item xs={4}>
             <div class="tree" >     </div>
             
             </Grid>
             <Grid item xs={4}>
             <div class="four">     </div>
             
             </Grid>
             </Grid>
         </Box>
        
            
             </div>
             </div>
         </div>
         <div class="widget">
            <div class="widget_title">
                <div class="widget_title_text"> Aonde Nos Encontrar? </div>
                <div class="widget_title_bar"> </div>
            </div>
            <div class="widget_body">
            <div class="text">
                Somos apaixonados por pets,Respeitamos uns aos outros,Reconhecemos esforços, premiamos resultados,Encantamos nossos clientes,Temos prazer em servir.</div>
            <div class="widget_title_bar1"> </div>
            <div class="phone"><img class="phone-img" src="https://img.icons8.com/ios/50/000000/apple-phone.png" width="16px"/> By Phone :<strong>47-8000-9855-356</strong></div>
            <div class="widget_title_bar1"> </div>
            <div class="email"><img class="email-img" src="https://img.icons8.com/material-outlined/24/000000/mail-contact.png" width="16px"/>  By Email :<strong>algumacoisa@hotmail.com</strong></div></div>
            <div class="widget_title_bar1"> </div>
            <div class="file"><img class="File-img" src="https://img.icons8.com/pastel-glyph/64/000000/file-arrow--v1.png" width="16px"/>  By File :<strong><a href="https://www.youtube.com/watch?v=oSTY_ITcDDk">Download</a></strong></div>
            <div class="widget_title_bar1"> </div>
            </div>
        </aside>
</section>


    

);


}