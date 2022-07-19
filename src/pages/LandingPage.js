import React from 'react'
import styled from 'styled-components'
import LandingFour from '../components/LandingPages/LandingFour'
import LandingOne from '../components/LandingPages/LandingOne'
import LandingThree from '../components/LandingPages/LandingThree'
import LandingTwo from '../components/LandingPages/LandingTwo'
import LandingTwoFullScreen from '../components/LandingPages/LandingTwoFullScreen'

const LandingPage = () => {
  return (
    <Wrapper>
      <LandingOne />
      <LandingTwo />
      <LandingTwoFullScreen />
      <LandingThree />
      <LandingFour />
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
