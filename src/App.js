import React from 'react'
import Layout from "./layout/Layout"
import "./App.css"
import { AppProvider } from './context/AppContext'

const App = () => {
  return (
    <AppProvider>
      <Layout />
    </AppProvider>
  )
}

export default App
