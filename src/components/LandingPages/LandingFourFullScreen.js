import React from 'react'
import styled from 'styled-components'
import { myWork } from '../../utils/data'
import { Link } from 'react-router-dom'
const LandingFourFullScreen = () => {
  return (
    <Wrapper>
      <div className='title style-Four'>
        <h4>
          Some of our <span className='section-style'>feature work</span>
        </h4>
      </div>
      <div className='layout-one'>
        {myWork
          .map((item, index) => {
            const { id, title, image, path } = item
            return (
              <article
                key={id}
                style={{
                  backgroundImage: `url(${image})`,
                  height: `450px`,
                  backgroundPosition: `center `,
                  backgroundSize: `cover`,
                }}
              >
                <div className='styling'></div>
                <h3 className='title'>{title}</h3>
                <Link to={path}>
                  <h5 className='hero-text'>Coming Soon</h5>
                </Link>
              </article>
            )
          })
          .slice(0, 2)}
      </div>
      <div className='layout-two'>
        {myWork
          .map((item, index) => {
            const { id, title, image, path } = item
            return (
              <article
                key={id}
                style={{
                  backgroundImage: `url(${image})`,
                  height: `450px`,
                  backgroundPosition: `center `,
                  backgroundSize: `cover`,
                }}
              >
                <div className='styling'></div>
                <h3 className='title'>{title}</h3>
                <Link to={path}>
                  <h5 className='hero-text'>Coming soon</h5>
                </Link>
              </article>
            )
          })
          .slice(2, 5)}
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  @media (max-width: 920px) {
    display: none;
  }
  .style-Four {
    padding: 2rem;
  }
  .layout-one {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin: 1rem auto;
  }
  .styling {
    height: 0px;
    width: 0px;
    background-color: var(--primary-4);
    transition: var(--transition);
    opacity: 0.3;
  }
  article {
    position: relative;
    :hover {
      .styling {
        width: 100%;
        height: 100%;
        position: absolute;
        transition: 2sec ease-in-out all;
      }
    }
  }
  .layout-two {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    margin: 1rem auto;
  }

  .hero-text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    background-color: var(--primary-5);
    padding: 10px;
    border: 5px;
    border-radius: var(--radius);
    opacity: 0.7;
    :hover {
      opacity: 1;
    }
  }
  .section-style {
    color: var(--primary-5);
  }
  .title {
    background-color: var(--grey-05);
    opacity: 0.8;
    transition: var(--transition);
  }
`
export default LandingFourFullScreen
