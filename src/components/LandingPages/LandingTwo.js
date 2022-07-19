import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { landingPageTwo } from '../../utils/data'
import styled from 'styled-components'

function LandingTwo() {
  const [people] = useState(landingPageTwo)
  const [index, setIndex] = React.useState(0)

  useEffect(() => {
    const lastIndex = people.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, people])
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  }, [index])

  return (
    <Wrapper className='section'>
      <div className='title'>
        <h2>Solutions</h2>
      </div>
      <div className='section-center'>
        {people.map((person, personIndex) => {
          const { id, title, titleTwo, paragraph, path } = person

          let position = 'nextSlide'
          if (personIndex === index) {
            position = 'activeSlide'
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide'
          }

          return (
            <article className={position} key={id}>
              <Link className='container-box' to={path}>
                <div className='design'></div>
                <p>{title}</p>
                <h2>{titleTwo}</h2>
                <p className='text'>{paragraph}</p>
              </Link>
            </article>
          )
        })}
        <button className='prev' onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  /* Slider Css */

  .section-center {
    margin: 0 auto;
    margin-top: 4rem;
    width: 80vw;
    height: 450px;
    max-width: 800px;
    text-align: center;
    position: relative;
    display: flex;
    overflow: hidden;
    border: 6px solid var(--white);
  }

  .prev,
  .next {
    position: absolute;
    top: 200px;
    transform: translateY(-50%);
    background: var(--primary-5);
    color: var(--white);
    width: 1.25rem;
    height: 1.25rem;
    display: grid;
    place-items: center;
    border-color: transparent;
    font-size: 1rem;
    border-radius: var(--radius);
    cursor: pointer;
    transition: var(--transition);
  }

  .prev {
    left: 0;
  }
  .next {
    right: 0;
  }
  .prev,
  .next {
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
  }
  @media (min-width: 800px) {
    .text {
      max-width: 45em;
    }
  }
  article {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: 0.8s ease-in-out all;
    background-color: var(--grey-05);
  }
  article.activeSlide {
    opacity: 1;
    transform: translateX(0);
  }
  article.lastSlide {
    transform: translateX(-80%);
  }
  article.nextSlide {
    transform: translateX(80%);
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
      padding: 3rem;
    }
  }

  @media (min-width: 920px) {
    display: none;
  }
`

export default LandingTwo
