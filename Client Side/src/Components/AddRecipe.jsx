import React ,{useState,useEffect} from 'react'
import GetIngredient from './GetIngredient'
import RecipeTextFields from './RecipeTextFields'

export default function AddRecipe() {
    var ingridents = []
    function callback2(e){
        if(ingridents.includes(e)){
            const index = ingridents.indexOf(e); 
            ingridents.splice(index, 1);
        }
        else{
            ingridents.push(e)
        }
    }

    useEffect(() => {

      },ingridents);
    return (

            // TODO: Get all Ingredient 
            // TODO: post Recipe 
        <div>
            <RecipeTextFields array = {ingridents}/>
            <h1>Choose ingridents</h1>
            <GetIngredient callback2={callback2}/>
        </div>
    )
}
