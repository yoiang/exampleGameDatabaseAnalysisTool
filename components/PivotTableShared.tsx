import { DatabaseRow } from '../models/DatabaseRow'

export type Props = {
  data: DatabaseRow[]

  aggregatorName?: string | void

  rendererName?: string | void
  rows?: string[] | void
  rowOrder?: string | void
  cols?: string[] | void
  colOrder?: string | void
  vals?: string[] | void

  showCustomization?: boolean
}
