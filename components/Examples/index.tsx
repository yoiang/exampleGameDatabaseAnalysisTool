import { DatabaseRow } from '../../models/DatabaseRow'
import DispositionOverTime from './DispositionOverTime'
import { RepresentationsOfOurFuture } from './RepresentationsOfOurFuture'

export type Props = {
  data: DatabaseRow[]
}

export const Examples = ({ data }: Props): JSX.Element => (
  <div className="examplesRoot">
    <div className="example">
      <RepresentationsOfOurFuture data={data} />
    </div>
    <div className="example">
      <DispositionOverTime data={data} />
    </div>
    <style jsx>{`
      .examplesRoot {
        display: grid;
        width: 100%;
        height: 100%;

        grid-template-columns: 50% 50%;
        grid-template-rows: 100% 100%;
      }

      .example {
        grid-column: 1 0;
        grid-row: 1 0;
      }
    `}</style>
  </div>
)

export default Examples
