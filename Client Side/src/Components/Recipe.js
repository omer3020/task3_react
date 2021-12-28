import React , {useState,useEffect} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import List from '@mui/material/List';
import ShowIngredient from './ShowIngredient';



export default function Recipe(props) {

  const [ingredients, setIngredient] = useState([]);   
  const [recipeIngrdients, setRecipeIngrdients] = useState([]);    
 

function fetchRecipeIngrdients(id){
    let apiUrl = `http://localhost:65358/api/Recipe?id=${id}`;

    fetch(apiUrl, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8'
      })
    })
    .then(res => {
      return res.json()
    })
    .then(result => {
      let modifiedArr = result.map(function(element){
        return element});
      setRecipeIngrdients(modifiedArr)
    },
        (error) => {
          console.log("err post=", error);
        });
}

function GetIngredientFromDB(){
  const apiUrl = 'http://localhost:65358/api/Ingredients';
  fetch(apiUrl, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json; charset=UTF-8',
      'Accept': 'application/json; charset=UTF-8'
    })
  })
  .then(res => {
    return res.json()
  })
    .then(
      (result) => {
        let ingredient = result.map(function(ingredient){
          if(recipeIngrdients.includes(ingredient.id)){
            console.log(ingredient.id);
            return <ShowIngredient key = {ingredient.id} id = {ingredient.id} img={ingredient.image} name={ingredient.name} cal={ingredient.calories}/>;
          }});
          setIngredient(ingredient)
      //  let ingredients = result.map(ingredient =>
      //   if(recipeIngrdients.includes(ingredient.id)){
      //   <Ingredient key = {ingredient.id} id = {ingredient.id} img={ingredient.image} name={ingredient.name} cal={ingredient.calories}/>;
      //   setIngredient(ingredients)
      },
      (error) => {
        console.log("err post=", error);
      });
  
}




  useEffect(() => {
    fetchRecipeIngrdients(props.id)
    // console.log('ingredients')
    GetIngredientFromDB()
    // console.log(ingredients)

    // console.log('fetchRecipeIngrdients(props.id)')
    // fetchRecipeIngrdients(props.id)
    // console.log(recipeIngrdients)
  },[ingredients]);


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
      <div>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              {ingredients}
            </List>
              </div>
    </Card>
    </div>

    )
}
