export const GlobalCSS = (): JSX.Element => (
  <style jsx global>{`
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      width: 100%;
      height: 100%;
    }
    #__next {
      width: 100%;
      height: 100%;
    }

    * {
      box-sizing: border-box;
    }
  `}</style>
)

export default GlobalCSS
