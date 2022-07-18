import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const image =
  'https://res.cloudinary.com/inam6530/image/upload/v1658168313/Portfolio/20210803-094930-responsive-devices-vincenzos_beq2vk.png'

const LandingOne = () => {
  return (
    <Wrapper>
      <div className='body-text'>
        <h3 className='heading-title'>We provide</h3>
        <h1 className='body-text'>Business Web Design &#38; Development </h1>
        <Link to='/services' className='btn btn-one'>
          My Services
        </Link>
      </div>
      <div className='image-box'>
        <img src={image} alt='' />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .body-text {
    text-align: center;
    .heading-title {
      color: var(--primary-5);
      padding-top: 2rem;
    }
    .body-text {
      max-width: var(--fixed-width);
      margin: 0 auto;
      line-height: 1;
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }
  .image-box {
    text-align: center;
    padding-top: 3rem;
    img {
      max-width: 400px;
      max-height: 400px;
    }
  }
  @media (min-width: 920px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    .image-box {
      img {
        max-width: 600px;
        max-height: 600px;
        margin-top: 2rem;
      }
    }
    .body-text {
      padding-top: 2rem;
    }
  }
  .btn-one {
    transition: var(--transition);
    :hover {
      transform: scale(1.2);
    }
  }
`

export default LandingOne
