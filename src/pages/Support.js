import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer/Footer'
import SupportOne from '../components/Support/SupportOne'
import SupportTwo from '../components/Support/SupportTwo'
import { emailSupport } from '../utils/data'

const Support = () => {
  return (
    <Wrapper>
      <SupportOne />
      <h1 className='two-heading'>Support / Email</h1>
      {emailSupport.map((item) => {
        return <SupportTwo key={item.id} {...item} />
      })}
      <Footer />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .two-heading {
    text-align: center;
    color: var(--primary-5);
  }
`

export default Support
