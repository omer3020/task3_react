using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebApplication1.Models;
using System.Threading;


namespace WebApplication1.Controllers
{
    public class RecipeController : ApiController
    {
        public IHttpActionResult PostRecipe(string name, string image, string cookingMethod, double time,string ingredients)
        {
            string[] array = ingredients.Split(',');
            int[] new_array = Array.ConvertAll(array, s => int.Parse(s));

            try
            {
                Recipe newRecipe = new Recipe(name, image, cookingMethod, time);
                newRecipe.addNewRecipe();
                Thread.Sleep(1000); //will sleep for 5 sec
                newRecipe.addIngredientsToRecipe(new_array);
                return Created(new Uri(Request.RequestUri.AbsoluteUri + newRecipe.id), newRecipe);
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }
        public IHttpActionResult Get()
        {
            try
            {
                Recipe recipe = new Recipe();
                List<Recipe> list = recipe.getRecipes();
                return Ok(list);
            }
            catch (Exception ex)
            {
                //return BadRequest(ex.Message);
                return Content(HttpStatusCode.BadRequest, ex);
            }
        
        }



       
    }
}
