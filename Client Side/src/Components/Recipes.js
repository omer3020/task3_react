import Recipe from './Recipe';
import React  , {useState,useEffect} from 'react'

export default function Recipes(props) {
    const [results, setResult] = useState([]);    
//TODO:we have in props all the Ingrdients



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
           let recipes = result.map(recipe =>
            <Recipe key = {recipe.id} realing={props.result} img={recipe.image} name={recipe.name} cook={recipe.cookingMethod} time={recipe.time}/>);
            setResult(recipes)
          },
          (error) => {
            console.log("err post=", error);
          });
    }

      // useEffect(() => {
      //   fetchFromDB()
      //   // console.log(props)
      // },[]);
  
          return (
            <div>
              <div className='container'>
            {results}
            </div>
            </div>
         )
    }