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



        //public List<Recipe> Get(int num)
        //{
        //    Recipe a = new Recipe();
        //    Console.WriteLine("Get Recipe Controller");
        //    return a.getRecipes();    
        //}
    }
}
