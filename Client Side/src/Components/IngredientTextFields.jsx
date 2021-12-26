import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function IngredientTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch'},
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Ingredient name:"
          defaultValue=""
        />
        <TextField
          id="outlined-disabled"
          label="Ingredient Image (url):"
          defaultValue=""
        />
        <TextField
          id="outlined-number"
          label="Calories"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <Button onClick={postIngredient} variant="contained" type="submit">
          Add Ingredient
          </Button>
      <Button variant="outlined" size="medium">
          Clear
        </Button>
    </Box>
  );
}
