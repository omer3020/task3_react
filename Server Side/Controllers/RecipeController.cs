using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class RecipeController : ApiController
    {
        // GET api/Recipe - get all Recipes in DB
        public List<Recipe> Get()
        {
            Recipe recipe = new Recipe();
            return recipe.getRecipes();
            
        }
    }
}
