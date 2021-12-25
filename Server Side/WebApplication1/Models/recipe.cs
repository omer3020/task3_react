using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Configuration;

namespace WebApplication1.Models
{
    public class Recipe
    {
        public Recipe()
        {

        }
        public Recipe(int id, string name, string image, string cookingMethod, float time)
        {
            this.id = id;
            this.name = name;
            this.image = image;
            this.cookingMethod = cookingMethod;
            this.time = time;
        }

        public List<Recipe> getRecipes()
        {
            
            ///
            SqlConnection con = null;
            List<Recipe> RecipesList = new List<Recipe>();

            try
            {
                con = connect("DBConnectionString"); // create a connection to the database using the connection String defined in the web config file

                String selectSTR = "SELECT * from recipes";
                SqlCommand cmd = new SqlCommand(selectSTR, con);

                // get a reader
                SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.CloseConnection); // CommandBehavior.CloseConnection: the connection will be closed after reading has reached the end

                while (dr.Read())
                {   // Read till the end of the data into a row
                    Recipe s = new Recipe();
                    s.id = (int)dr["id"];
                    s.name = (string)dr["name"];
                    s.image = (string)dr["image"];
                    s.cookingMethod = (string)dr["cookingMethod"];
                    s.time = (float)dr["time"];
                    RecipesList.Add(s);
                }

                return RecipesList;
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }
            finally
            {
                if (con != null)
                {
                    con.Close();
                }

            }

        }
        public SqlConnection connect(String conString)
        {
            // read the connection string from the configuration file
            string cStr = WebConfigurationManager.ConnectionStrings[conString].ConnectionString;
            SqlConnection con = new SqlConnection(cStr);
            con.Open();
            return con;
        }
        public int id { get; set; }
        public string name { get; set; }
        public string image { get; set; }
        public  string cookingMethod { get; set; }
        public float time { get; set; }
    }
}