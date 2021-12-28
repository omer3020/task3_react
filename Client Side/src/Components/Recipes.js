import Recipe from './Recipe';
import React  , {useState,useEffect} from 'react'
const apiUrl = 'http://localhost:65358/api/Recipe';

export default function Recipes(props) {
    const [results, setResult] = useState([]);    

  function fetchRecipeIngrdients(){
    
  }


    function fetchFromDB(){
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
<<<<<<< HEAD
            <Recipe key = {recipe.id} realing={props.result} img={recipe.image} name={recipe.name} cook={recipe.cookingMethod} time={recipe.time}/>);
=======
            <Recipe key = {recipe.id} img={recipe.image} name={recipe.name} cook={recipe.cookingMethod} time={recipe.time}/>);
>>>>>>> parent of a1c02f6 (done day 2)
            setResult(recipes)
          },
          (error) => {
            console.log("err post=", error);
          });
    }

<<<<<<< HEAD
      // useEffect(() => {
      //   fetchFromDB()
      //   // console.log(props)
      // },[]);
=======
      useEffect(() => {
        fetchFromDB()
        console.log(props)
      },[]);
>>>>>>> parent of a1c02f6 (done day 2)
  
          return (
            <div>
              <div className='container'>
            {results}
            </div>
            </div>
         )
    }