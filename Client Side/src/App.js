import React , {useState} from 'react'
import Recipes from './Components/Recipes'
export default function App() {
  function handleAddRecipe(){

  }

  function handleAddIngredient(){

  }
  return (
    <>
      <div>
        Dishes
      </div>
      <button onClick={handleAddRecipe} >Add Recipe</button>
      <button onClick={handleAddIngredient} >Add Ingredient</button>
      <Recipes />
    </>
  )
}
