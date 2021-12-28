import Recipe from './Recipe';
import React  , {useState,useEffect} from 'react'
import GetIngredient from './GetIngredient';

export default function Recipes(props) {
    const [recipes, setRecipes] = useState([]);   
    const [ingredients, setIngredient] = useState([]);    
 
//TODO:we have in props all the Ingrdients


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
        //setIngredient(result)
        console.log(result)
        setIngredient(result)
      
      },
      (error) => {
        console.log("err post=", error);
      });
}

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
      return result
    },
        (error) => {
          console.log("err post=", error);
        });
}


function fetchFromDB(){
      let apiUrl = "http://localhost:65358/api/Recipe"
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
           let recipesfromDB = result.map(recipe =>
            <Recipe key = {recipe.id} id={recipe.id} img={recipe.image} name={recipe.name} cook={recipe.cookingMethod} time={recipe.time}/>);
            setRecipes(recipesfromDB)
          },
          (error) => {
            console.log("err post=", error);
          });
}

      useEffect(() => {
        fetchFromDB()
        console.log()
      },[]);
  
          return (
            <div>
              <div className='container'>
            {recipes}
            </div>
            </div>
         )
    }