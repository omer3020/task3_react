import Recipe from './Recipe';
import React  , {useState} from 'react'
const apiUrl = 'http://localhost:65358/api/Ingredients';



export default function Recipes() {
    const [results, setResult] = useState([]);    


    fetch(apiUrl, {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json; charset=UTF-8',
          'Accept': 'application/json; charset=UTF-8'
        })
      })
        .then(
          (result) => {
           console.log("fetch btnFetchGetStudents= ", result);
           setResult([...results,result])
        //    let Recipes = results.map(Recipe =>
        //     <Recipe key = {results.id} img={results.image} name={results.name} cook={results.cookingMethod} time={results.time}/>);
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

