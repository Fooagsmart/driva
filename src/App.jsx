import React from 'react'

import { ProSidebarProvider } from 'react-pro-sidebar';
import Routes from './Routes';

const App = () => {
  return (
    <ProSidebarProvider>
      <Routes />
    </ProSidebarProvider>
  )
}

export default App
