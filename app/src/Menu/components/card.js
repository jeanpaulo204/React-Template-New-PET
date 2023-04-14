import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Icon from '@mdi/react';
import { mdiCommentProcessing } from '@mdi/js';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

export const Newcard = ({title, texto, btn , comentario , image}) => {


return (
    
<Box sx={{ maxWidth: 550 }}>
<CardActions component="span" sx={{ p: 0, border: '1px dashed grey' }}>
        
   
  <Box sx={{ flexGrow: 1 }}>
  <Grid container spacing={4} columns={10}>
  <Grid  xl={5} sm={5} md={5}>
  <Button variant="outlined" size="small">{btn}</Button>
  </Grid>
  <Grid  xl={5} sm={3} md={5}>
  <Button variant="outlined" color="success"  size="small">{comentario}<Icon path={mdiCommentProcessing} size={1} /></Button>
  </Grid>
  </Grid>
  </Box>
        
</CardActions>
      <CardMedia
        sx={{ height: 300 }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {texto}
        </Typography>
      </CardContent>
 
    </Box>


);


}