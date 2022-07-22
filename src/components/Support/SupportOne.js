import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const url =
  'https://res.cloudinary.com/inam6530/image/upload/v1658513768/Blue_Customer_Support_Online_Service_Illustration_Instagram_Post.png_wvzfa4.png'
const inam =
  'https://res.cloudinary.com/inam6530/image/upload/v1658341599/inam_gmuuw3.png'

const BlogOne = () => {
  return (
    <Wrapper>
      <button
        className='btn'
        type='button'
        style={{ position: 'fixed', bottom: '1rem', right: '1.5rem' }}
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
      >
        Scroll up
      </button>
      <div className='box'>
        <div className='box-1 hide'></div>
        <div className='box-2'>
          <h1 className='box-1-text'>Business Website Support</h1>
          <h5>
            Your business success is the main focus of your Customer Success
            Team
          </h5>
        </div>
      </div>
      <Link to='/contact'>
        <div className='img-holder'>
          <img src={url} alt='' />
        </div>
      </Link>
      <div className='box-two'>
        <div>
          <h4>
            A business web page design is only as good as the support that backs
            it up.
          </h4>
          <p>
            Your team knows your design inside and out. They work with you from
            the beginning, helping you during the design process and training
            your staff on how to make changes. Every step of the way, your
            dedicated Customer Success Team member is there to help you. Even
            after your website is completed, they are still there to help answer
            questions.
          </p>
        </div>
        <Link to='/about'>
          <div className='cart'>
            <h3>programmer</h3>
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
    max-height: 400px;
    max-width: 400px;
    overflow: hidden;
    margin: 0 auto;
    transition: var(--transition);
    box-shadow: var(--shadow-2);
    :hover {
      box-shadow: var(--shadow-4);
      cursor: pointer;
    }
    img {
      max-width: 100%;
      max-height: 400px;
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
