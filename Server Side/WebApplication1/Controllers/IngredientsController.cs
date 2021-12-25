using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    
    public class IngredientsController : ApiController
    {
        //GET: /api/Ingredients - get all Ingredient
        public IHttpActionResult Get()
        {   
            try
            {
                Ingredient ingredient = new Ingredient();
                List<Ingredient> list = ingredient.getIngredients();
                return Ok(list);
            }
            catch (Exception ex)
            {
                //return BadRequest(ex.Message);
                return Content(HttpStatusCode.BadRequest, ex);
            }

        }

        public IHttpActionResult Post([FromBody] Ingredient newIngredient)
        {
            try
            {
                Ingredient ingredient = new Ingredient();
                ingredient.addNewIngredient(newIngredient);
                return Created(new Uri(Request.RequestUri.AbsoluteUri + newIngredient.id), newIngredient);
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }
    }
}
