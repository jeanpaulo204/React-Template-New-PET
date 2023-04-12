import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Icon from '@mdi/react';
import { mdiCommentProcessing } from '@mdi/js';

export const Newcard = ({title, texto, btn , comentario , image}) => {


return (
    
<Card sx={{ maxWidth: 550 }}>
<CardActions>
        <Button variant="outlined" size="small">{btn}</Button>
        <Button variant="outlined" color="success"  size="small">{comentario} '<Icon path={mdiCommentProcessing} size={1} /></Button>
        
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
 
    </Card>


);


}