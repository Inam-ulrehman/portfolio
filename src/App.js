import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  SharedLayout,
  LandingPage,
  ErrorPage,
  About,
  Contact,
  Portfolio,
  Services,
  WebWizard,
  SmallBusinessBlog,
  Support,
} from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<LandingPage />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path='about' element={<About />} />
          <Route path='Portfolio' element={<Portfolio />} />
          <Route path='Services' element={<Services />} />
          <Route path='WebWizard' element={<WebWizard />} />
          <Route path='SmallBusinessBlog' element={<SmallBusinessBlog />} />
          <Route path='Support' element={<Support />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
