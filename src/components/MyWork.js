import React from 'react'

import styled from 'styled-components'

const MyWork = () => {
  return (
    <Wrapper>
      <h1 className='title'>
        Recent / <span>work</span>
      </h1>
      <p style={{ maxWidth: '100%' }} className='title'>
        E-commerce{' '}
      </p>
      <div className='img-holder'>
        <a
          href='https://burgerqueenbyinam.netlify.app/'
          target='_blank'
          rel='noreferrer'
        >
          <p className='hero-text'>launch site</p>

          <img
            src='https://firebasestorage.googleapis.com/v0/b/burger-queen-6b0d2.appspot.com/o/computer.png?alt=media&token=0210f342-e313-4770-a850-a5be195f710d'
            alt=''
          />
        </a>
      </div>
      <div className='img-holder'>
        <a
          href='https://saniaoptical.netlify.app/'
          target='_blank'
          rel='noreferrer'
        >
          <p className='hero-text'>launch site</p>
          <img
            src='https://res.cloudinary.com/inam6530/image/upload/v1658236732/Portfolio/image1_xy2xeh.png'
            alt=''
          />
        </a>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  span {
    color: var(--primary-5);
  }

  .img-holder {
    height: 300px;
    display: grid;
    place-items: center;
    position: relative;
    margin: 1rem;

    p {
      background: var(--primary-5);
      padding: 1rem;
      border-radius: var(--radius);
      transition: var(--transition);
    }

    img {
      height: 300px;
      width: 300px;
      box-shadow: var(--shadow-2);
      transition: var(--transition);
      object-fit: cover;
      :hover {
        box-shadow: var(--shadow-4);
      }
    }
  }
`
export default MyWork
