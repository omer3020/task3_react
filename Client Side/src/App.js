import React , {useState} from 'react'
import Recipes from './Components/Recipes'
import AddRecipe from './Components/AddRecipe'
import { Routes, Route } from 'react-router-dom';
import EHeader from './Components/EHeader';
import AddIngredient from './Components/AddIngredient.jsx';
import './Components/App.css'

export default function App() {
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
      <Recipes />
    </>
  )
}