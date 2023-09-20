import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import theme from './styles/theme'
import { Routes } from './routes'
import { myContext } from './myContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <myContext.Provider value={{name: "Carlos" , email: "admin@.com"}} >
        <Routes />
      </myContext.Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
