import { GetStaticProps } from 'next'
import { Grommet } from 'grommet'
import { Tabs, Tab as GrommetTab } from 'grommet'

import { DatabaseRow } from '../models/DatabaseRow'
import { getDatabase } from './api/database'

import GlobalCSS from '../components/GlobalCSS'
import Head from '../components/Head'
import PivotTable from '../components/PivotTableSSR'
import RawTable from '../components/RawTable'
import { theme } from '../config/theme'
import Examples from '../components/Examples'

type StaticProps = {
  databaseRows: DatabaseRow[]
}

export type Tab = {
  label: string
  contents: JSX.Element
}

export const Home = ({ databaseRows }: StaticProps): JSX.Element => {
  const tabs: Tab[] = [
    {
      label: 'Pivot',
      contents: <PivotTable data={databaseRows} />,
    },
    {
      label: 'Examples',
      contents: <Examples data={databaseRows} />,
    },
    {
      label: 'Raw',
      contents: <RawTable rows={databaseRows} />,
    },
  ]

  return (
    <Grommet full theme={theme}>
      <Head pageTitle="Pivot Table" />

      <Tabs a11yTitle="Main navigation" alignControls="start" flex>
        {tabs.map((tab, index) => (
          <GrommetTab title={tab.label} key={`tab-${index}`}>
            {tab.contents}
          </GrommetTab>
        ))}
      </Tabs>

      <GlobalCSS />
    </Grommet>
  )
}

export const getStaticProps: GetStaticProps<StaticProps> = async (_context) => {
  const databaseRows = await getDatabase()

  return {
    props: {
      databaseRows,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  }
}

export default Home
