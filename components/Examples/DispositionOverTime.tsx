import { DatabaseRow } from '../../models/DatabaseRow'
import PivotTable from '../PivotTableSSR'

export type Props = {
  data: DatabaseRow[]
}

export const DispositionOverTime = ({ data }: Props): JSX.Element => {
  const preparedData = data
    .filter((value) => {
      return value.year !== null
    })
    .filter((value) => {
      return value.disposition !== null
    })
  return (
    <PivotTable
      data={preparedData}
      rendererName="Grouped Bar Chart"
      rows={['year']}
      rowOrder="value_z_to_a"
      cols={['disposition']}
      colOrder="value_z_to_a"
    />
  )
}

export default DispositionOverTime
