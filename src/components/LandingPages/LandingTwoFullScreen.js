import React from 'react'
import styled from 'styled-components'
import { landingPageTwo } from '../../utils/data'
import { Link } from 'react-router-dom'

const LandingTwoFullScreen = () => {
  return (
    <Wrapper>
      {landingPageTwo.map((person) => {
        const { id, title, titleTwo, paragraph, path } = person
        return (
          <article key={id}>
            <Link className='container-box' to={path}>
              <div className='design'></div>
              <p>{title}</p>
              <h2>{titleTwo}</h2>
              <p className='text'>{paragraph}</p>
            </Link>
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.article`
  @media (max-width: 920px) {
    display: none;
  }
  display: flex;
  padding: 1rem;
  article {
    gap: 1rem;
    border: 5px solid var(--white);
  }
  .container-box {
    color: var(--black);

    .design {
      height: 5px;
      width: 140px;
      background-color: var(--primary-5);
      transition: 0.7s ease-in-out all;
    }
    :hover {
      .design {
        width: 250px;
      }
      h2 {
        color: var(--primary-5);
      }
    }
    .text {
      padding: 10px;
    }
  }
`
export default LandingTwoFullScreen
