import React, { useState, useEffect } from 'react'
import { GlobalStyle } from '../styles/Global'
import { ResetStyle } from '../styles/Reset'
import { theme } from '../styles/Theme'
import { ThemeProvider } from 'styled-components'

function MyApp({ Component, pageProps }) {

  //config
  const Layout = Component?.renderData?.layout ? Component.renderData.layout : React.Fragment;
  const cleanUpSearch = Component?.renderData?.cleanUpSearch ? Component.renderData.cleanUpSearch : false

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ResetStyle />
        <Layout cleanUpSearch={cleanUpSearch}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
