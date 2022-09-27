import { React, useEffect } from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer/Footer'
import MyWork from '../components/MyWork'

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])
  return (
    <Wrapper>
      <MyWork />
      <Footer />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  padding-top: 1.5rem;
`
export default Services
