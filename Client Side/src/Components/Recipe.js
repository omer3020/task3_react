import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Recipe(props) {
    return (

        <div className='ingredient_card'>
        <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.img}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <div>Cooking Method: {props.cook}</div>
            <div>Cooking Time : {props.time}</div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    )
}
