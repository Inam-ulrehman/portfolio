import React from 'react'
import styled from 'styled-components'
import LandingOne from '../components/LandingPages/LandingOne'
import LandingTwo from '../components/LandingPages/LandingTwo'
import LandingTwoFullScreen from '../components/LandingPages/LandingTwoFullScreen'

const LandingPage = () => {
  return (
    <Wrapper>
      <LandingOne />
      <LandingTwo />
      <LandingTwoFullScreen />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  height: 400vh;
  @media (max-width: 920px) {
    margin-top: 4rem;
  }
`
export default LandingPage
