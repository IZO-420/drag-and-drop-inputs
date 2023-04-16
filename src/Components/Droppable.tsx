import { useDroppable } from '@dnd-kit/core'

interface Props {
  children: JSX.Element | JSX.Element[] | null
  id: string
}

export function Droppable (props: Props): JSX.Element {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id
  })
  const style = {
    color: isOver ? 'green' : undefined,
    height: '100%'
  }

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  )
}
