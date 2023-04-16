import { useDraggable } from '@dnd-kit/core'
import { Box, IconButton } from '@mui/material'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import './style.scss'

interface Props {
  children: JSX.Element | JSX.Element[] | null
  id: string
}

export function Draggable (props: Props): JSX.Element {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id
  })
  const style =
    transform != null
      ? {
          transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`
        }
      : undefined

  return (
    <Box
      ref={setNodeRef}
      className="draggableStyle"
      style={
        style
      }
    >
      <IconButton {...attributes} {...listeners} className="draggableIcon">
        <DragIndicatorIcon />
      </IconButton>
      {props.children}
    </Box>
  )
}
