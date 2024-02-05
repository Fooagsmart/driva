import React from 'react'

import { ProSidebarProvider } from 'react-pro-sidebar';
import AllRoutes from './AllRoutes';

const App = () => {
  return (
    <ProSidebarProvider>
      <AllRoutes />
    </ProSidebarProvider>
  )
}

export default App
