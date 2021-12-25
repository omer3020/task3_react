import Recipe from './Recipe';
import React  , {useState} from 'react'
const apiUrl = 'http://localhost:65358/api/Recipe';



export default function Recipes() {
    const [results, setResult] = useState([]);    


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
           let recipes = result.map(recipe =>
            <Recipe key = {recipe.id} img={recipe.image} name={recipe.name} cook={recipe.cookingMethod} time={recipe.time}/>);
            setResult(recipes)
          },
          (error) => {
            console.log("err post=", error);
          });
  
          return (
            <div>
            {results}
            </div>
         )

    }

