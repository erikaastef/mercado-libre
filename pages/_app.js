import { GlobalStyle } from '../styles/Global'
import { ResetStyle } from '../styles/Reset'
import { theme } from '../styles/Theme'
import { ThemeProvider } from 'styled-components'

function MyApp({ Component, pageProps }) {

  const Layout = Component?.renderData?.layout ? Component.renderData.layout : React.Fragment;

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ResetStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
