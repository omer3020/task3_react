import React, {useRef} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function RecipeTextFields(props) {

  const nameRef = useRef('') //creating a refernce for TextField Component  
  const imgRef = useRef('')
  const cookmethodRef = useRef('')
  const cooktimeRef = useRef('')

  const postIngredient = () => {
    if(props.array.length === 0 || nameRef.current.value === '')
    {
      alert('you have to choose at least 1 ingrident')
      return
    }
    // console.log(props.array)
    // console.log('sss')
    let apiUrl = `http://localhost:65358/api/Recipe?name=${nameRef.current.value}&image=${imgRef.current.value}&cookingMethod=${cookmethodRef.current.value}&time=${cooktimeRef.current.value}&ingredients=${props.array}`
    
    fetch(apiUrl, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8'
      })
    })
    .then(res => {
      window.location.href="/AddRecipe"
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
          inputRef={cookmethodRef}
          id="outlined-disabled"
          label="Recipe cooking method:"
          defaultValue=""
        />
                <TextField
          inputRef={cooktimeRef}
          id="outlined-disabled"
          label="Recipe cooking time:"
          defaultValue=""
        />
                <TextField
          inputRef={imgRef}
          id="outlined-disabled"
          label="Recipe Image (url):"
          defaultValue=""
        />
            <Button onClick={postIngredient} variant="contained">
        Add Recipe
      </Button>
      <Button variant="outlined" size="medium">
        Clear
      </Button>
      </div>

    </Box>
    
  );
}