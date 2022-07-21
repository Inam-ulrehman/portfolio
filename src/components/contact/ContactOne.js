import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const url =
  'https://res.cloudinary.com/inam6530/image/upload/v1658429544/Black_Minimalist_Grow_Your_Business_LinkedIn_Banner_ltf2xa.png'
const inam =
  'https://res.cloudinary.com/inam6530/image/upload/v1658341599/inam_gmuuw3.png'

const BlogOne = () => {
  return (
    <Wrapper>
      <div className='box'>
        <div className='box-1 hide'></div>
        <div className='box-2'>
          <h1 className='box-1-text'>Web Design Contact Page</h1>
          <h5>
            Get in touch &#38; stay connected! Our entire team is here for you
            and will answer your questions and put you on the path to success.
          </h5>
        </div>
      </div>
      <div className='img-holder'>
        <img src={url} alt='' />
      </div>
      <div className='box-two'>
        <div>
          <h2>Contact us today!</h2>
          <h5>Learn first-hand how we can help you with your website needs.</h5>
        </div>
        <Link to='/about'>
          <div className='cart'>
            <h3>About Inam</h3>
            <img src={inam} alt='' />
            <p>
              Name: <span>Inam ul Rehman</span>
            </p>
            <div className='title-underline'></div>
          </div>
        </Link>
      </div>

      <hr />
    </Wrapper>
  )
}

const Wrapper = styled.section`
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
