import React, {useState,useEffect, useRef} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function RecipeTextFields() {

  const nameRef = useRef('') //creating a refernce for TextField Component  
  const ingRef = useRef('')
  const calRef = useRef('')

  const postIngredient = () => {
    let apiUrl = `http://localhost:65358/api/Recipe?name=${nameRef.current.value}&url=${ingRef.current.value}&cal=${calRef.current.value}`
    
    fetch(apiUrl, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8'
      })
    })
    .then(res => {
      return res
    },
      (error) => {
          console.log("err post=", error);
        });
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch'},
      }}
      noValidate
      autoComplete="off"
    >
      <div className='container_fields'>
        <TextField
          required
          inputRef={nameRef}
          id="outlined-required"
          label="Recipe name:"
          defaultValue=""
        />
        <TextField
          inputRef={ingRef}
          id="outlined-disabled"
          label="Recipe cooking method:"
          defaultValue=""
        />
                <TextField
          inputRef={ingRef}
          id="outlined-disabled"
          label="Recipe cooking time:"
          defaultValue=""
        />
                <TextField
          inputRef={ingRef}
          id="outlined-disabled"
          label="Recipe Image (url):"
          defaultValue=""
        />
            <Button onClick={postIngredient} variant="contained" type="submit">
        Add Recipe
      </Button>
      <Button variant="outlined" size="medium">
        Clear
      </Button>
      </div>

    </Box>
  );
}