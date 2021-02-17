import { DatabaseRow } from '../../models/DatabaseRow'
import PivotTable from '../PivotTableSSR'

export type Props = {
  data: DatabaseRow[]
}

export const RepresentationsOfOurFuture = ({ data }: Props): JSX.Element => {
  const preparedData = data
    .filter((value) => {
      return value.technology === 'High Tech' || value.technology === 'Low Tech'
    })
    .filter((value) => {
      return (
        value.disposition === 'Pessimistic' ||
        value.disposition === 'Optimistic'
      )
    })
  return (
    <PivotTable
      data={preparedData}
      aggregatorName="List Unique Values"
      rendererName="Scatter Chart"
      rows={['technology']}
      rowOrder="value_z_to_a"
      cols={['disposition']}
      colOrder="value_z_to_a"
      vals={['title']}
    />
  )
}

/*


aggregatorName
:
"List Unique Values"

aggregators
:
{Average: ƒ () {}, Count: ƒ () {}, Count Unique Val…}

data
:
[{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, …]

derivedAttributes
:
{}

hiddenAttributes
:
[]

hiddenFromAggregators
:
[]

hiddenFromDragDrop
:
[]
menuLimit
:

renderers
:
{Area Chart: ƒ Renderer() {}, Dot Chart: ƒ Renderer…}


sorters
:
{}
tableColorScaleGenerator
:
ƒ redColorScaleGenerator() {}

tableOptions
:
{}
unusedOrientationCutoff
:
85

valueFilter
:
{}
*/
