import { deepMerge } from 'grommet/utils'
import { grommet, ThemeType } from 'grommet'

const overrides: ThemeType = {
  tabs: {
    header: {
      background: 'green-6',
      border: {
        side: 'bottom',
        size: 'small',
      },
      extend: {
        width: '100%',
      },
    },
    gap: 'large',
    extend: {
      height: '100%',
    },
  },
  tab: {
    background: '#FFFFFFAA',
    border: {
      side: 'bottom',
      color: 'dark-4',
    },
    pad: 'small',
    margin: {
      // bring the overall tabs border behind invidual tab borders
      vertical: '-2px',
      horizontal: 'none',
    },
  },
}

export const theme: ThemeType = deepMerge(grommet, overrides)

export default theme
