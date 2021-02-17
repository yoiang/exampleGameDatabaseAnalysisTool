import { DatabaseRow } from '../models/DatabaseRow'
import { CellParams, DataGrid } from '@material-ui/data-grid'
import { Tooltip, Typography } from '@material-ui/core'

export type Props = {
  rows: DatabaseRow[]
}

export const RawTable = ({ rows }: Props): JSX.Element => {
  const columns = [
    {
      field: 'title',
      headerName: 'Title',
      description: "Game's title",
      width: 150,
    },
    { field: 'developer', headerName: 'Developer', width: 150 },
    {
      field: 'year',
      headerName: 'Year',
      description: 'Year first released',
      type: 'date',
      width: 85,
    },
    {
      field: 'metascore',
      headerName: 'Metascore',
      description: 'Highest Metascore across all platforms',
      type: 'number',
      width: 125,
    },
    { field: 'scope', headerName: 'Scope', width: 95 },
    {
      field: 'estimatedPlayerCount',
      headerName: 'Estimated Player Count',
      type: 'number',
      width: 150 /*valueFormatter: ({ value }) => valueFormatter.format(Number(value))*/,
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 300,
      renderCell: (params: CellParams) => (
        <Tooltip title={params.value}>
          <Typography style={{ overflowX: 'hidden', textOverflow: 'ellipsis' }}>
            {params.value}
          </Typography>
        </Tooltip>
      ),
    },
    {
      field: 'environmentalTheme',
      headerName: 'Environmental Themes',
      width: 200,
    },
    { field: 'unSDGAlignment', headerName: 'UN SDG Alignment', width: 180 },
    { field: 'salience', headerName: 'Salience', width: 110 },
    { field: 'timeline', headerName: 'Timeline', width: 110 },
    { field: 'disposition', headerName: 'Disposition', width: 130 },
    { field: 'technology', headerName: 'Technology', width: 130 },
    { field: 'messaging', headerName: 'Messaging', width: 130 },
    { field: 'motivation', headerName: 'Motivation', width: 130 },
    {
      field: 'notableAchievements',
      headerName: 'Notable Achievements',
      width: 150,
    },
    // {
    //     field: 'age',
    //     headerName: 'Age',
    //     type: 'number',
    //     width: 90,
    // },
    // {
    //     field: 'fullName',
    //     headerName: 'Full name',
    //     description: 'This column has a value getter and is not sortable.',
    //     sortable: false,
    //     width: 160,
    //     valueGetter: (params) =>
    //     `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
    // },
  ]

  const idedRows = rows.map((row, index) => {
    return {
      id: index,
      ...row,
    }
  })

  return (
    <div className="rawTable">
      <DataGrid rows={idedRows} columns={columns} />

      <style jsx>{`
        .rawTable {
          width: 100%;
          padding: 0;
          margin: 0;
          height: 100%;
        }
      `}</style>
    </div>
  )
}

export default RawTable
