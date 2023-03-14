import React, { ReactNode } from 'react'

import { Box } from '@mui/system'
import Navbar from '../navbar/Navbar'

type Props = {
  children: ReactNode
}

const MainLayout = ({children}: Props) => {
  return (
    <Box>
      <Navbar />
      <Box p={4}>{children}</Box>
    </Box>
  )
}

export default MainLayout