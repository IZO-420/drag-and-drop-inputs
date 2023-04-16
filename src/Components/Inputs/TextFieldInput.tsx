import { Box, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import '../style.scss'

export const TextFieldInput: () => JSX.Element = () => {
  const [text, setText] = useState('')
  return (
    <Box className="inputrWapperStyle">
      <Typography className="textStyle" variant='body1'>Enter some Text Here</Typography>

      <TextField
        sx={{ width: '100%' }}
        id="outlined-basic"
        value={text.length > 0 ? text : localStorage.getItem('textField')}
        onChange={(event) => {
          localStorage.setItem('textField', event.target.value)
          setText(event.target.value)
        }}
      />
    </Box>
  )
}
