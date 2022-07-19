import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LandingThree = () => {
  const image =
    'https://res.cloudinary.com/inam6530/image/upload/v1658237990/Portfolio/s_gapwgx.png'
  return (
    <Wrapper className='container-three'>
      <div className='header'>
        <h2>We build exceptional websites</h2>
        <h4>that are responsive,quick &#38; robust.</h4>
        <h2>We also build accessible websites</h2>
        <h4>that meets AODA compliance.</h4>
        <div className='design-div'></div>
        <Link className='btn btn-hipster' to='/contact'>
          Get your business website design started
        </Link>
      </div>
      <div className='image'>
        <img src={image} alt='' />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .header {
    margin: 2rem auto;
    h2 {
      color: var(--primary-5);
    }
  }

  .image {
    overflow: hidden;
    text-align: center;
    height: 400px;
    max-width: 500px;
    margin: 0 auto;
    img {
      max-height: 400px;
      max-width: 100%;
      display: block;
      object-fit: cover;
    }
  }
  @media (min-width: 920px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

export default LandingThree
