using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Web.Configuration;




namespace WebApplication1.Models
{
    public class Recipe
    {
        public int id { get; set; }
        public string name { get; set; }
        public string image { get; set; }
        public string cookingMethod { get; set; }
        public double time { get; set; }

        public Recipe()
        {

        }
        public Recipe( string name, string image, string cookingMethod, double time)
        {
            this.name = name;
            this.image = image;
            this.cookingMethod = cookingMethod;
            this.time = time;
        }
        public Recipe(int id, string name, string image, string cookingMethod, double time)
        {
            this.id = id;
            this.name = name;
            this.image = image;
            this.cookingMethod = cookingMethod;
            this.time = time;
        }
        public int addIngredientsToRecipe(int[] ingredient)
        {
            SqlCommand sendCmd = new SqlCommand();
            SqlConnection con = new SqlConnection();

            try
            {
                con = connect("DBConnectionString"); // create the connection
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            foreach (int item in ingredient)
            {
                
                sendCmd = BuildInsertCommand(item, con);      // helper method to build the insert string

                try
                {
                    int numEffected = sendCmd.ExecuteNonQuery(); // execute the command
                }
                catch (SqlException ex)
                {
                    if (ex.Number == 2627)
                    {
                        return 0;
                    }
                    else throw;
                }

            }
            if (con != null)
            {
                // close the db connection
                con.Close();
            }
                return 0;


        }
        public int addNewRecipe()
        {
            SqlCommand sendCmd = new SqlCommand();
            SqlConnection con = new SqlConnection();

            try
            {
                con = connect("DBConnectionString"); // create the connection
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            sendCmd = BuildInsertCommand(this, con);      // helper method to build the insert string

            try
            {
                int numEffected = sendCmd.ExecuteNonQuery(); // execute the command
                return numEffected;
            }
            catch (SqlException ex)
            {
                if (ex.Number == 2627)
                {
                    return 0;
                }
                else throw;
            }

            finally
            {
                if (con != null)
                {
                    // close the db connection
                    con.Close();

                }
            }

        }
        public List<Recipe> getRecipes()
        {
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
                    s.time = (double)dr["time"];
                    RecipesList.Add(s);
                }
                //TODO: Print result
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

        private SqlCommand BuildInsertCommand(Object Obj, SqlConnection con)
        {

            if (Obj is Recipe)
            {
                Recipe temp = (Recipe)Obj;
                // use a string builder to create the dynamic string
                string sql_insert = "VALUES (@name,@image,@cookingMethod,@time)";
                string prefix = "INSERT INTO recipes (name, image,cookingMethod,time)";
                string CommandText = prefix + sql_insert;
                SqlCommand cmd = new SqlCommand(CommandText, con);
                cmd.Parameters.AddWithValue("@name", temp.name);
                cmd.Parameters.AddWithValue("@cookingMethod", temp.cookingMethod);
                cmd.Parameters.AddWithValue("@image", temp.image);
                cmd.Parameters.AddWithValue("@time", temp.time);
                return cmd;
            }

            else
            {                
                int number = (int)Obj;
                String selectSTR = "INSERT INTO ingredientsInRecipes (recipeId, ingredientId)" +
                                   "VALUES((select id from recipes where name = '" + this.name + "'),"+number+"); ";
                SqlCommand cmd = new SqlCommand(selectSTR, con);
                return cmd;
            }
        }
    }
}