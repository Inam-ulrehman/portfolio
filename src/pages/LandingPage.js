import { React, useEffect } from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer/Footer'
import GoogleMaps from '../components/GoogleMaps'
import LandingFive from '../components/LandingPages/LandingFive'
import LandingFour from '../components/LandingPages/LandingFour'
import LandingFourFullScreen from '../components/LandingPages/LandingFourFullScreen'
import LandingOne from '../components/LandingPages/LandingOne'
import LandingThree from '../components/LandingPages/LandingThree'
import LandingTwo from '../components/LandingPages/LandingTwo'
import LandingTwoFullScreen from '../components/LandingPages/LandingTwoFullScreen'

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])
  return (
    <Wrapper>
      <LandingOne />
      <LandingTwo />
      <LandingTwoFullScreen />
      <LandingThree />
      <LandingFour />
      <LandingFourFullScreen />
      <LandingFive />
      <GoogleMaps />
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  @media (max-width: 920px) {
    margin-top: 4rem;
  }
`
export default LandingPage
