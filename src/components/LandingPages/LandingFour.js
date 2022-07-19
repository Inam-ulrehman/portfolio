import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { myWork } from '../../utils/data'
import styled from 'styled-components'

function LandingFour() {
  const [people] = useState(myWork)
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
    }, 10000)
    return () => {
      clearInterval(slider)
    }
  }, [index])

  return (
    <Wrapper className='section'>
      <div className='title'>
        <h3>
          Some of our <span>feature work</span>
        </h3>
      </div>
      <div className='section-center'>
        {people.map((person, personIndex) => {
          const { id, title, image, path } = person

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
            <Link className='container-box' to={path}>
              <article
                style={{
                  backgroundImage: `url(${image})`,
                  height: `450px`,
                  backgroundPosition: `center `,
                  backgroundSize: `cover`,
                }}
                className={position}
                key={id}
              >
                <div className='design'></div>
                <h5 className='hero-text'>{title}</h5>
              </article>
            </Link>
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
      height: 100%;
      width: 0px;
      background-color: var(--primary-5);
      opacity: 0.4;
      transition: 0.2s ease-in-out all;
    }
    :hover {
      .design {
        width: 100%;
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
  .hero-image {
    /* background-image: url('../src/images/hero.jpg'); */
    background-color: #cccccc;
    height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
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
  }
`

export default LandingFour
