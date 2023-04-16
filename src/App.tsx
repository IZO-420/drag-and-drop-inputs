import { useState } from 'react'
import './App.scss'
import {
  DndContext,
  TouchSensor,
  type DragEndEvent,
  useSensor
} from '@dnd-kit/core'

import { Draggable } from './Components/Draggable'
import { TextFieldInput } from './Components/Inputs/TextFieldInput'
import { SelectInput } from './Components/Inputs/SelectInput'
import { type DataTableType, type DraggableType } from './Types'
import { isMobile } from 'react-device-detect'
import { Wrapper } from './AppWrapper'

const defaultComponents: DraggableType[] = [
  {
    id: 'textField',
    parent: 'A',
    component: (
      <Draggable id="textField" key="textField">
        <TextFieldInput />
      </Draggable>
    )
  },
  {
    id: 'select',
    parent: 'B',
    component: (
      <Draggable id="select" key="select">
        <SelectInput />
      </Draggable>
    )
  }
]

function App (): JSX.Element {
  const [components, setComponents] = useState(defaultComponents)
  const [dataTable, setDataTable] = useState<
  Array<DataTableType | undefined> | undefined
  >([])
  const touchSensor = useSensor(TouchSensor)

  function handleDragEnd (event: DragEndEvent): void {
    const { over, active } = event

    setComponents((allComponent) => {
      return allComponent.map((item) =>
        active.id === item.id ? { ...item, parent: over?.id ?? null } : item
      )
    })
  }

  return isMobile
    ? (
    <DndContext onDragEnd={handleDragEnd} sensors={[touchSensor]}>
      <Wrapper
        components={components}
        dataTable={dataTable}
        setDataTable={setDataTable}
      />
    </DndContext>
      )
    : (
    <DndContext onDragEnd={handleDragEnd}>
      <Wrapper
        components={components}
        dataTable={dataTable}
        setDataTable={setDataTable}
      />
    </DndContext>
      )
}

export default App
