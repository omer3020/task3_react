import React  , {useState,useEffect} from 'react'
import Ingredient from './Ingredient';
import './App.css'
// https://proj.ruppin.ac.il/bgroup63/test2/react_task_3/Server Side/api/Ingredients
const apiUrl = 'http://localhost:65358/api/Ingredients';


export default function GetIngredient(props) {
    const [resultss, setResults] = useState([]);    
    function callback(e,props2){
      props.callback2(e,props2)
    }

    function GetIngredientFromDB(){
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
             let ingredients = result.map(ingredient =>
              <Ingredient key = {ingredient.id} callback={callback} id = {ingredient.id} img={ingredient.image} name={ingredient.name} cal={ingredient.calories}/>);
              setResults(ingredients)
            },
            (error) => {
              console.log("err post=", error);
            });
      }
  
        useEffect(() => {
            GetIngredientFromDB()
        },[]);

    return (
        <div>
          <div className="container">
            {resultss}
            </div>
        </div>
    )
}
