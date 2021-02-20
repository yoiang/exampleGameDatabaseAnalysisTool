import dynamic from 'next/dynamic'
import { PlotParams } from 'react-plotly.js'

export const PlotlySSR = dynamic<PlotParams>(
  () => import('./Plotly').then((module) => module.default),
  {
    ssr: false,
  }
)
export default PlotlySSR
