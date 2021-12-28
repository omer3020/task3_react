import React , {useState,useEffect,useLayoutEffect} from 'react'
import Recipes from './Components/Recipes'
import AddRecipe from './Components/AddRecipe'
import { Routes, Route } from 'react-router-dom';
import EHeader from './Components/EHeader';
import AddIngredient from './Components/AddIngredient.jsx';
import './Components/App.css'


const apiUrl = 'http://localhost:65358/api/Ingredients';

export default function App() {
  // function callback3(props2){

  // }
  const [results, setResults] = useState([]);    

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
          // console.log(result)
          setResults(result)
        
        },
        (error) => {
          console.log("err post=", error);
        });
  }

    useEffect(() => {
        GetIngredientFromDB()
    },[results] ); 
  return (
    <>
      <div>
        {EHeader}
      </div>
      
      <Routes>
          {/* <Route path="/" element={<Recipes />} /> */}
          <Route path="/addrecipe" element={<AddRecipe />} />
          <Route path="/addingredient" element={<AddIngredient />} />
      </Routes>
      <hr  style={{
        color: '#000000',
        backgroundColor: '#000000',
        height: .5,
        borderColor : '#000000'
      }}/>
      <Recipes result={results}/>
    </>
  )
}