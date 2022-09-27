import { React, useEffect } from 'react'
import AboutOne from '../components/About/AboutOne'
import Footer from '../components/Footer/Footer'

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])
  return (
    <div>
      <AboutOne />
      <Footer />
    </div>
  )
}

export default About
