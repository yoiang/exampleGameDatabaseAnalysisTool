import dynamic from 'next/dynamic'
import { Props } from './PivotTableShared'

export const PivotTableSSR = dynamic<Props>(
  () => import('./PivotTableUI').then((module) => module.PivotTable),
  {
    ssr: false,
  }
)
export default PivotTableSSR
