import { React, useEffect } from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer/Footer'
// import GoogleMaps from '../components/GoogleMaps'
import {
  LandingOne,
  LandingTwo,
  LandingTwoFullScreen,
  LandingThree,
  LandingFive,
} from '../components/LandingPages'

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
      <LandingFive />
      {/* <GoogleMaps /> */}
      <hr />
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
