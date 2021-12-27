import React from 'react'
import GetIngredient from './GetIngredient'
import RecipeTextFields from './RecipeTextFields'

export default function AddRecipe() {
    return (
            // TODO: Get all Ingredient 
            // TODO: post Recipe 
        <div>
            <RecipeTextFields/>
            <h1>Choose ingridents</h1>
            <GetIngredient/>
        </div>
    )
}
