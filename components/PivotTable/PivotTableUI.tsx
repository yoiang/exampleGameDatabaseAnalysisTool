import { useState } from 'react'

import PivotTableUI from 'react-pivottable/PivotTableUI'
import 'react-pivottable/pivottable.css'

import TableRenderers from 'react-pivottable/TableRenderers'
import Plotly from 'react-plotly.js'
import createPlotlyRenderers from 'react-pivottable/PlotlyRenderers'

import { requireFields } from '../../utility/dataProcessing'
import { Props } from './PivotTableShared'

const plotlyRenderers = createPlotlyRenderers(Plotly)

export const PivotTable = ({
  data,
  aggregatorName,
  rendererName,
  rows,
  rowOrder,
  cols,
  colOrder,
  vals,
  showCustomization,
}: Props): JSX.Element => {
  const cleanedData = requireFields(['metascore', 'year'], data)
  const [pivotState, setPivotState] = useState({
    aggregatorName,
    rendererName,
    rows,
    rowOrder,
    cols,
    colOrder,
    vals,
  })

  const renderers = Object.assign({}, TableRenderers, plotlyRenderers)
  if (!showCustomization && rendererName) {
    const rendererKeys = Object.keys(renderers)
    rendererKeys.forEach((key) => {
      if (key !== rendererName) {
        delete renderers[key]
      }
    })
  }
  return (
    <PivotTableUI
      data={cleanedData}
      onChange={setPivotState}
      renderers={renderers}
      {...pivotState}
    />
  )
}
