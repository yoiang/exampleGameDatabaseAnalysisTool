import { DatabaseRow } from '../../models/DatabaseRow'
import { Props as PlotlyProps } from 'react-pivottable'

export type Props = {
  data: DatabaseRow[]

  showCustomization?: boolean
} & PlotlyProps
