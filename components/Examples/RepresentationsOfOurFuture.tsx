import Plotly from '../Plotly/PlotlySSR'

import { ColorForMetascore, DatabaseRow } from '../../models/DatabaseRow'
import { map } from '@adorkable/eunomia-typescript'

export type Props = {
  data: DatabaseRow[]
}

type Range = {
  minimum: number
  maximum: number
}
type SizeForMetascoreScale = {
  metascore: Range
  baseSize: number
  scaleOffset: number
}

export const RepresentationsOfOurFuture = ({ data }: Props): JSX.Element => {
  const x: string[] = []
  const y: string[] = []
  const z: number[] = []
  const text: string[] = []
  const size: number[] = []
  const color: string[] = []

  const sizesForMetascore: SizeForMetascoreScale[] = [
    {
      metascore: {
        minimum: 1,
        maximum: 49,
      },
      baseSize: 10,
      scaleOffset: 10,
    },
    {
      metascore: {
        minimum: 50,
        maximum: 59,
      },
      baseSize: 20,
      scaleOffset: 10,
    },
    {
      metascore: {
        minimum: 60,
        maximum: 69,
      },
      baseSize: 40,
      scaleOffset: 10,
    },
    {
      metascore: {
        minimum: 70,
        maximum: 79,
      },
      baseSize: 60,
      scaleOffset: 10,
    },
    {
      metascore: {
        minimum: 80,
        maximum: 89,
      },
      baseSize: 80,
      scaleOffset: 10,
    },
    {
      metascore: {
        minimum: 90,
        maximum: 100,
      },
      baseSize: 100,
      scaleOffset: 10,
    },
  ]
  const sizeForMetascore = (metascore: number): number => {
    const scale = sizesForMetascore.reduce((previousValue, currentValue) => {
      if (previousValue !== undefined) {
        return previousValue
      }
      if (
        currentValue.metascore.minimum < metascore &&
        currentValue.metascore.maximum > metascore
      ) {
        return currentValue
      }
      return undefined
    }, undefined)
    if (scale === undefined) {
      return 0
    }
    return (
      scale.baseSize +
      map(
        metascore,
        scale.metascore.minimum,
        scale.metascore.maximum,
        0,
        scale.scaleOffset
      )
    )
  }

  data
    .filter((value) => {
      return value.technology === 'High Tech' || value.technology === 'Low Tech'
    })
    .filter((value) => {
      return (
        value.disposition === 'Pessimistic' ||
        value.disposition === 'Optimistic'
      )
    })
    .filter((value) => {
      return typeof value.metascore === 'number'
    })
    .forEach((value) => {
      const metascore = value.metascore as number
      x.push(value.disposition)
      y.push(value.technology)
      z.push(metascore)
      text.push(value.title + ' - ' + metascore)
      size.push(metascore)
      color.push(ColorForMetascore(metascore))
    })
  return (
    <Plotly
      data={[
        {
          x,
          y,
          z,
          text,
          mode: 'markers',
          type: 'scatter3d',
          marker: {
            size: size.map(sizeForMetascore),
            color,
          },
        },
      ]}
      layout={{
        autosize: true,
        title: 'Technology vs Disposition Counts sized by Metascore',
        barmode: 'group',

        scene: {
          xaxis: {
            title: 'Disposition',
          },
          yaxis: {
            title: 'Technology',
          },
          zaxis: {
            title: 'Metascore',
          },
        },
      }}
    />
  )
}
