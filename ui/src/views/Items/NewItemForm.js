import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { getToken } from '../../utility/utils';

export default function NewItemForm() {

    const navigate = useNavigate()

    // This state stores the data from all inputs
    const [data, setData] = useState({})
    const [error, setError] = useState("")

    //* Whenever an input changes it will send both the name of that input (property) and the event for that input 
    // and then we set the data to be the previous data, plus the new data
    //* and then we simply set the data to be the previous data, plus the new data
    const onChange = property => event => {
        setData({
            ...data,
            [property]: event.target.value
        })
    }


    // This submit will only work if there is data in both the itemName and quantity input fields
    const onSubmit = async (event) => {
        event.preventDefault();

        if (!data.itemName) {
            return setError('Please enter an item name')
        } else if (!data.quantity) {
            return setError('Please enter a quantity')
        }


        setError("");
        console.log(data)


        const token = getToken()
        const response = await fetch('http://localhost:9000/items', {
            method: "POST", 
            headers: new Headers({
              "Authorization": `Bearer ${token}`,
              'Content-Type': 'application/json'
            }),
            body: JSON.stringify(data),
        }).then((res) => {
              // this .then means request succeeded
            alert("Item added successfully!")
            navigate('/profile')
        }).catch(err => {
            console.log(err)
            alert("Item was not added. Please try again.")
          })




    }

    return (
        <Box
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
    <div className="newitem-container">

    <h1> Add a new item </h1>

    <Stack spacing={2} direction="column">

    <TextField onChange={onChange('itemName')} label="Item Name" variant="outlined" />
    <TextField onChange={onChange('description')} label="Description" variant="outlined"  multiline rows={4}/>
    <TextField onChange={onChange('imageURL')} label="Image URL" variant="outlined" />
    <TextField onChange={onChange('quantity')} label="Quantity" variant="outlined" type="number" min="0" />
          
          
     {error && <span className="error">{error}</span>}
    <Button onClick={onSubmit}  variant="contained">Submit</Button>   
    </Stack>      
          
    </div>
    
    </Box>
  )
}
