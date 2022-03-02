import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';

export default function DropDown(props){

    const options = props.options
    const [selectedOption, selectOption] = useState('')

    const handleChange = (event) => {
        selectOption(event.target.value)
   
      }

    useEffect(()=>{
 
        if (selectedOption !== ''){
            console.log("SELECTED option", selectedOption)
            props.action(selectedOption)
        }
    }, [selectedOption, options])

    const  dropDownStyle = {
        color:'black', 
     
    }
console.log("OPTIONS", options)
    return(
        <Box sx={{ minWidth: 200 }}>
        <FormControl fullWidth>
        <InputLabel sx={dropDownStyle} id="demo-simple-select-label"> {props.label}</InputLabel>
        <Select
            sx={dropDownStyle}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedOption}
            label={props.label}
            onChange={handleChange}
        >
            {
                options && options.map(
                    (option,i)=> {
                      if (typeof option == 'string' ){
                        return(
                            <MenuItem key={i} sx={dropDownStyle} value={option}>{option}</MenuItem>
                        )
                      } else {
                          return(
                            <MenuItem key={i} sx={dropDownStyle} value={option.id}>{option.username}</MenuItem>
                          )
                      }
                    }
                )
            }
         </Select>
         </FormControl>
     </Box>
    )
}