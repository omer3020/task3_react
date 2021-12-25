using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Configuration;

namespace WebApplication1.Models
{
    public class Ingredient
    {
        public Ingredient()
        {

        }
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


        private SqlCommand BuildInsertCommand(Object Obj, SqlConnection con)
        {
            if (Obj is Ingredient)
            {
                Ingredient temp = (Ingredient)Obj;
                // use a string builder to create the dynamic string
                string sql_insert = "Values(@name,@img,@calories)";
                string prefix = "INSERT INTO ingredients " + "(name,image,calories)";
                string CommandText = prefix + sql_insert;
                SqlCommand cmd = new SqlCommand(CommandText, con);
                cmd.Parameters.AddWithValue("@name", temp.name);
                cmd.Parameters.AddWithValue("@calories", temp.calories);
                cmd.Parameters.AddWithValue("@image", temp.image);

                return cmd;
            }
            return new SqlCommand();
        }


            public void addNewIngredient(Ingredient ingredient)
        {
            if (ingredient == null)
            {
                return;
            }
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

            sendCmd = BuildInsertCommand(obj, con);      // helper method to build the insert string

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

        public SqlConnection connect(String conString)
        {
            // read the connection string from the configuration file
            string cStr = WebConfigurationManager.ConnectionStrings[conString].ConnectionString;
            SqlConnection con = new SqlConnection(cStr);
            con.Open();
            return con;
        }

        public List<Ingredient> getIngredients()
        {
            SqlConnection con = null;
            List<Ingredient> IngredientList = new List<Ingredient>();

            try
            {
                con = connect("DBConnectionString"); // create a connection to the database using the connection String defined in the web config file

                String selectSTR = "SELECT * from ingredients";
                SqlCommand cmd = new SqlCommand(selectSTR, con);

                // get a reader
                SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.CloseConnection); // CommandBehavior.CloseConnection: the connection will be closed after reading has reached the end

                while (dr.Read())
                {   // Read till the end of the data into a row
                    Ingredient ingredient = new Ingredient();
                    ingredient.id = (int)dr["id"];
                    ingredient.name = (string)dr["name"];
                    ingredient.image = (string)dr["image"];
                    ingredient.calories = (int)dr["calories"];
                    IngredientList.Add(ingredient);
                }
                //TODO: Print result
                return IngredientList;
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
    }
}