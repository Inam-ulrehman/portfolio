import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

import DesktopNavbar from '../components/navbar/DesktopNavbar'
import MobileNavbar from '../components/navbar/MobileNavbar'

const SharedLayout = () => {
  return (
    <Wrapper>
      <DesktopNavbar />
      <MobileNavbar />
      <Outlet />
    </Wrapper>
  )
}

const Wrapper = styled.main``

export default SharedLayout
