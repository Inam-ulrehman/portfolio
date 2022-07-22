import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer/Footer'
import LandingFour from '../components/LandingPages/LandingFour'
import LandingFourFullScreen from '../components/LandingPages/LandingFourFullScreen'

const Services = () => {
  return (
    <Wrapper>
      <LandingFourFullScreen />
      <LandingFour />
      <Footer />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  padding-top: 1.5rem;
`
export default Services
