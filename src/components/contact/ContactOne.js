import React from 'react'

import styled from 'styled-components'

const url =
  'https://res.cloudinary.com/inam6530/image/upload/v1658429544/Black_Minimalist_Grow_Your_Business_LinkedIn_Banner_ltf2xa.png'

const BlogOne = () => {
  return (
    <Wrapper>
      <div className='box'>
        <div className='box-1 hide'></div>
        <div className='box-2'>
          <h1 className='box-1-text'>Contact US</h1>
          <h5>
            Get in touch &#38; stay connected! Our entire team is here for you
            and will answer your questions and put you on the path to success.
          </h5>
        </div>
      </div>
      <div className='img-holder'>
        <img src={url} alt='' />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 100vh;
  .img-holder {
    height: auto;
    overflow: hidden;
    img {
      width: 100%;
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
  }
`

export default BlogOne
