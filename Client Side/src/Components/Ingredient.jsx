import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { ClassNames } from '@emotion/react';


export default function Ingredient(props) {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    function handleOnChange(e){
      if(e)
      console.log(e.target.id)
    }
    return (
        <div className='ingredient_card'>
        <Card sx={{ maxWidth: 200 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={props.img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {props.name}
            <Checkbox onClick={handleOnChange}  id={props.id }{...label} />
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Calories : {props.cal}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </div>
    );   
}
