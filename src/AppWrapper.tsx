import { Box, Grid, Button } from '@mui/material'
import { isMobile } from 'react-device-detect'
import { Droppable } from './Components/Droppable'
import { TableComponent } from './Components/TableComponent'
import { type DataTableType, type DraggableType } from './Types'
import Container from './Components/Container'
import './App.scss'

interface ComponentProps {
  components: DraggableType[]
  dataTable: Array<DataTableType | undefined> | undefined
  setDataTable: React.Dispatch<React.SetStateAction<Array<DataTableType | undefined> | undefined>>
}

const defaultGridStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%'
}
const gridItemStyle = isMobile ? { ...defaultGridStyle, padding: '.4em' } : defaultGridStyle

export function Wrapper ({ components, dataTable, setDataTable }: ComponentProps): JSX.Element {
  return (<Box className="appBody">
    <Grid container sx={isMobile ? { width: '100%' } : { width: '50%' }}>
      <Grid item xs={isMobile ? 6 : 5} sx={gridItemStyle}>
        <Container>
          <Droppable key={'A'} id={'A'}>
            {components?.flatMap((item: DraggableType) =>
              item?.parent === 'A' ? item?.component : []
            ) ?? <div>Drop here</div>}
          </Droppable>
        </Container>
      </Grid>
      {!isMobile && <Grid xs={2}></Grid>}
      <Grid item xs={isMobile ? 6 : 5} sx={gridItemStyle}>
        <Container>
          <Droppable key={'B'} id={'B'}>
            {components.flatMap((item) =>
              item.parent === 'B' ? item.component : []
            ) ?? <div>Drop here</div>}
          </Droppable>
        </Container>
      </Grid>
      <Grid xs={isMobile ? 9 : 10}></Grid>
      <Grid xs={2} className="buttonGridStyle">
        <Button
          variant="contained"
          sx={{ margin: '1em' }}
          onClick={() => {
            setDataTable(
              components.flatMap((item) =>
                item.parent === 'B'
                  ? {
                      id: item.id,
                      data: localStorage.getItem(item.id ?? '')
                    }
                  : []
              )
            )
          }}
        >
          Save
        </Button>
      </Grid>
      <Grid xs={12} sx={{ ...gridItemStyle, height: '30vh' }}>
        {dataTable != null && dataTable?.length > 0 && (
          <TableComponent dataTable={dataTable}/>
        )}
      </Grid>
    </Grid>
  </Box>)
}
