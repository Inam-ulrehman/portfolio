import { React, useEffect } from 'react'
import BlogOne from '../components/Blog/BlogOne'
import BlogTwo from '../components/Blog/BlogTwo'
import Footer from '../components/Footer/Footer'

const SmallBusinessBlog = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])
  return (
    <div>
      <BlogOne />
      <BlogTwo />
      <hr />
      <Footer />
    </div>
  )
}

export default SmallBusinessBlog
