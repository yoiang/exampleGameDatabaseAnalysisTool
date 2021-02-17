import { DatabaseRow } from '../../models/DatabaseRow'
import DispositionOverTime from './DispositionOverTime'
import { RepresentationsOfOurFuture } from './RepresentationsOfOurFuture'

export type Props = {
  data: DatabaseRow[]
}

export const Examples = ({ data }: Props): JSX.Element => (
  <div className="examplesRoot">
    <RepresentationsOfOurFuture data={data} />
    <DispositionOverTime data={data} />
    <style jsx>{``}</style>
  </div>
)

export default Examples
