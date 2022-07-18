import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Wrapper className='logo'>
      <Link to='/'>
        <h3 className='logo-heading'>
          inam<span className='logo-span'>Web</span>Solutions
        </h3>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .logo-heading {
    margin: 0;
    font-size: 2rem;
    font-weight: 700;
    color: var(--grey-5);
    .logo-span {
      color: var(--primary-6);
      margin: 0 -2px;
    }
  }
`
export default Logo
