import React from 'react'
import styled from 'styled-components'
import InamCard from '../Card/InamCard'
import SaniaCard from '../Card/SaniaCard'
import ShubhamCard from '../Card/ShubhamCard'

const BlogOne = () => {
  return (
    <Wrapper>
      <div className='box-two'>
        <div>
          <h3>Meet Our Team</h3>
          <div className='title-underline'></div>
          <p>
            Inam doesn't do this alone. He is backed by a leadership team of web
            design veterans that collectively bring fresh, unique, interesting
            and above all successful web design and marketing strategies to
            every project.
          </p>
        </div>
      </div>
      <div className='cards-holder'>
        <InamCard />
        <SaniaCard />
        <ShubhamCard />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 1rem;
  min-height: 100vh;

  .box-two {
    text-align: center;
    display: grid;
    place-content: center;

    h4 {
      max-width: 400px;
      margin: 0 auto;
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
  @media (min-width: 820px) {
    .cards-holder {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      justify-content: center;
    }
  }
`

export default BlogOne
