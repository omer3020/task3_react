import React ,{useState,useEffect} from 'react'
import GetIngredient from './GetIngredient'
import RecipeTextFields from './RecipeTextFields'

export default function AddRecipe(props) {
    var ingridents = []
    function callback2(e,props2){
        if(e == -1){
            props.callback3(props2)
            return
        }
        if(ingridents.includes(e)){
            const index = ingridents.indexOf(e); 
            ingridents.splice(index, 1);
        }
        else{
            ingridents.push(e)
        }
        props.callback3(props2)
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
