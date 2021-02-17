import React from 'react'
import { Box, Tabs, Tab as GrommetTab } from 'grommet'

export type Tab = {
  value: any
  label: string
  contents: JSX.Element
}

export type Props = {
  ariaLabel: string
  tabs: Tab[]
}

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

export const NavigationBar = ({
  ariaLabel,
  tabs,
}: Props): JSX.Element => {
  return (
      <Tabs aria-label={ariaLabel}>
        {
          tabs.map((tab, index) => (
            <GrommetTab title={tab.label}  key={`tab-${index}`} >
              {tab.contents}
            </GrommetTab>
            ))
        }
      </Tabs>
  )
}

export default NavigationBar
