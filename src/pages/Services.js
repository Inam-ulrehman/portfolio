import { React, useEffect } from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer/Footer'
import LandingFour from '../components/LandingPages/LandingFour'
import LandingFourFullScreen from '../components/LandingPages/LandingFourFullScreen'

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])
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
