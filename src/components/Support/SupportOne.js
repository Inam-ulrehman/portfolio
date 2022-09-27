import React from 'react'
import styled from 'styled-components'
import InamCard from '../Card/InamCard'

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

      <div className='box-two'>
        <div>
          <h1>A business web page design.</h1>
          <p>
            Your team knows your design inside and out. They work with you from
            the beginning, helping you during the design process and training
            your staff on how to make changes. Every step of the way, your
            dedicated Customer Success Team member is there to help you. Even
            after your website is completed, they are still there to help answer
            questions.
          </p>
        </div>
        <InamCard />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;
  .box-two {
    margin: 2rem;
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
