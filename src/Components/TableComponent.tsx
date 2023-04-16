import { Box, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'

interface DataType { id?: string, data?: string | null }

export function TableComponent ({ dataTable }: { dataTable: Array<DataType | undefined> }): JSX.Element {
  return (<Box
        sx={{
          borderStyle: 'solid',
          borderRadius: '5px',
          borderWidth: '.1em',
          borderColor: '#bbbbbb',
          boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
        }}
      >
        <Table sx={{ minWidth: '100%' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Data</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataTable?.map((row: DataType | undefined) => (
              <TableRow
                key={row?.id ?? ''}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 }
                }}
              >
                <TableCell component="th" scope="row">
                  {row?.id ?? ''}
                </TableCell>
                <TableCell align="right">{row?.data ?? ''}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>)
}
