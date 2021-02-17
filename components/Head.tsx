import NextHead from 'next/head'

export type Props = {
  pageTitle?: string | void
}

const SiteHead = 'IGDA Climate SIG'
export const Head = ({ pageTitle }: Props): JSX.Element => (
  <NextHead>
    <title>
      {[pageTitle, SiteHead].filter((value) => value !== undefined).join(' - ')}
    </title>
    <link rel="icon" href="/favicon.ico" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
  </NextHead>
)

export default Head
