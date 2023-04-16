import { type UniqueIdentifier } from '@dnd-kit/core'

export interface DraggableType {
  id: string
  parent: UniqueIdentifier | null
  component: JSX.Element
}

export interface DataTableType { id?: string, data?: string | null }
