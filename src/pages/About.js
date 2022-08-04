import { React, useEffect } from 'react'
import AboutOne from '../components/About/AboutOne'

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])
  return (
    <div>
      <AboutOne />
    </div>
  )
}

export default About
