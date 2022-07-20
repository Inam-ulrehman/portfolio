import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const url =
  'https://res.cloudinary.com/inam6530/image/upload/v1658338983/team_a4440w.png'
const inam =
  'https://res.cloudinary.com/inam6530/image/upload/v1658341599/inam_gmuuw3.png'

const BlogOne = () => {
  return (
    <Wrapper>
      <div className='box'>
        <div className='box-1 hide'></div>
        <div className='box-2'>
          <h1 className='box-1-text'>Blog</h1>
          <h5>
            We've written some insightful, entertaining articles that span
            topics from support to design to content management and beyond!
          </h5>
        </div>
      </div>
      <div className='img-holder'>
        <img src={url} alt='' />
      </div>
      <div className='box-two'>
        <div>
          <h4>
            18 Things You Need to Consider Before Starting an E-commerce
            Business
          </h4>
          <p>
            Starting an E-commerce website doesn’t have to be challenging, but
            it does require planning, clear objectives, and an understanding of
            consumer psychology. REM’s WebWiz@rd offers a robust E-commerce
            platform with a suite of tools and shipping options to help get your
            online store up and running correctly from the start.
          </p>
        </div>
        <Link to='/about'>
          <div className='cart'>
            <h3>Contributor</h3>
            <img src={inam} alt='' />
            <p>
              Name: <span>Inam ul Rehman</span>
            </p>
            <div className='title-underline'></div>
            <p>
              Total post: <span>12</span>
            </p>
          </div>
        </Link>
      </div>
      <hr />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 100vh;
  .box-1-text {
  }
  .img-holder {
    height: auto;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .box-two {
    text-align: center;

    h4 {
      max-width: 400px;
      margin: 0 auto;
      padding-top: 2rem;
    }
  }
  .cart {
    margin: 1rem auto;
    /* border: 2px solid var(--black); */
    max-width: 300px;
    box-shadow: var(--shadow-2);
    transition: var(--transition);
    :hover {
      box-shadow: var(--shadow-4);
      span {
        color: var(--primary-5);
      }
      cursor: pointer;
    }
    h3 {
      color: var(--primary-5);
    }
    img {
      max-width: 150px;
      border-radius: 15px 50px;
    }
    span {
      color: var(--grey-5);
    }
  }
  /* Media query */
  @media (max-width: 920px) {
    padding-top: 8rem;
    .hide {
      display: none;
    }
  }
  @media (min-width: 920px) {
    .box {
      display: grid;
      grid-template-columns: 400px auto;
    }
    .box-two {
      display: grid;
      grid-template-columns: 1fr 280px;
    }
  }
`

export default BlogOne
