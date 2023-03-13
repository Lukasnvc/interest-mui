import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const MainLayout = ({children}: Props) => {
  return (
    <>
    {children}
    </>
  )
}

export default MainLayout