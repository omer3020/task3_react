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

        public List<Recipe> Get()
        {
            Recipe a = new Recipe();
            return a.getRecipes();
            
        }
    }
}
