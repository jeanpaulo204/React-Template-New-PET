import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TitleTwoTone } from '@mui/icons-material';

export const Carde = ({title, texto, btn , btn1 , image}) => {


return (
    
<Card sx={{ maxWidth: 400 }}>
<CardActions>
        <Button size="small">{btn}</Button>
        <Button size="small">{btn1}</Button>
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