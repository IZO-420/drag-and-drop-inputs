
import { Box } from '@mui/material'
import './style.scss'

interface Props {
  children: string | JSX.Element | JSX.Element[]
}

function Container ({ children }: Props): JSX.Element {
  return <Box className="containerStyle">{children}</Box>
}
export default Container
