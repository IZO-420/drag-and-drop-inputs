import { type SelectChangeEvent, Box, Select, MenuItem, Typography } from '@mui/material'
import { useState } from 'react'
import '../style.scss'

export const SelectInput: () => JSX.Element = () => {
  const [age, setAge] = useState('')
  const handleChange: (event: SelectChangeEvent) => void = (event) => {
    localStorage.setItem('select', event.target.value)
    setAge(event.target.value)
  }

  return (
    <Box className="inputrWapperStyle">
      <Typography className="textStyle" variant='body1'>Select your Stack</Typography>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age.length > 0 ? age : localStorage.getItem('select') ?? ''}
        label="Age"
        onChange={handleChange}
        fullWidth
      >
        <MenuItem value={'FrontEnd'}>FrontEnd</MenuItem>
        <MenuItem value={'BackEnd'}>BackEnd</MenuItem>
        <MenuItem value={'FullStack'}>FullStack</MenuItem>
      </Select>
    </Box>
  )
}
