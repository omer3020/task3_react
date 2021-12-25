using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Ingredient
    {
        public Ingredient(int id, string name, int calories, string image)
        {
            this.id = id;
            this.name = name;
            this.calories = calories;
            this.image = image;
        }

        public int id { get; set; }
        public string name { get; set; }
        public int calories { get; set; }
        public string image { get; set; }


    }
}