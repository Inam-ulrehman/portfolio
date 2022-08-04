import { React, useEffect } from 'react'
import ContactOne from '../components/contact/ContactOne'
import ContactTwo from '../components/contact/ContactTwo'
import Footer from '../components/Footer/Footer'
import GoogleMaps from '../components/GoogleMaps'

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])
  return (
    <div>
      <ContactOne />
      <ContactTwo />
      <GoogleMaps />
      <Footer />
    </div>
  )
}

export default Contact
