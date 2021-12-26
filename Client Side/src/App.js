import React , {useState} from 'react'
import Recipes from './Components/Recipes'
import AddRecipe from './Components/AddRecipe'
import { Routes, Route } from 'react-router-dom';
import EHeader from './Components/EHeader';
import AddIngredient from './Components/AddIngredient.jsx';


export default function App() {
  function handleAddRecipe(){

  }

  function handleAddIngredient(){

  }
  return (
    <>
      <div>
        {EHeader}
      </div>
      <Routes>
          <Route path="/" element={<Recipes />} />
          <Route path="/addrecipe" element={<AddRecipe />} />
          <Route path="/addingredient" element={<AddIngredient />} />
      </Routes>
    </>
  )
}
