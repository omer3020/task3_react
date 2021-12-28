

import { Link } from 'react-router-dom';

const EHeader =
    <div style={{ borderBottom: 'solid green 2px', margin: 15, padding: 10, fontSize: 25 }}>
        
        <div>
            <Link to="">Home</Link> |
            <Link to="/AddRecipe">Add Recipe</Link> |
            <Link to="/AddIngredient">Add Ingredient</Link>
        </div>

    </div>;
export default EHeader;