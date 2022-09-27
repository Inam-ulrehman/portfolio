import React from 'react'
import facebook from '../../images/facebook.svg'
import instagram from '../../images/instagram.svg'
import linkedin from '../../images/linkedin.svg'
import styled from 'styled-components'
const inam =
  'https://res.cloudinary.com/inam6530/image/upload/v1664284821/WhatsApp_Image_2022-09-27_at_9.18.04_AM_-_Edited_k9u6lq.png'

const SaniaCard = () => {
  return (
    <Wrapper>
      <div className='cart'>
        <h5>Product &amp; Sale's Manager</h5>
        <img src={inam} alt='' />
        <p>
          Name: <span>Sania ul Rehman</span>
        </p>
        <p>
          Phone: <span>9054094096</span>
        </p>
        <div className='title-underline' style={{ marginTop: '1rem' }}></div>
        {/* Social icons in cart */}
        <div className='social-icons'>
          <h4 className='title'>SOCIAL MEDIA</h4>
          <ul>
            <li>
              <a href='https://facebook.com' target='_blank' rel='noreferrer'>
                <img className='icon' src={facebook} alt='' />
              </a>
            </li>
            <li>
              <a href='https://instagram.com' target='_blank' rel='noreferrer'>
                <img className='icon' src={instagram} alt='' />
              </a>
            </li>
            <li>
              <a href='https://linkedin.com' target='_blank' rel='noreferrer'>
                <img className='icon' src={linkedin} alt='' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 70%;
  .cart {
    margin: 1rem auto;
    /* border: 2px solid var(--black); */
    max-width: 300px;
    box-shadow: var(--shadow-2);
    transition: var(--transition);
    text-align: center;
    p {
      margin-top: 0px;
      margin-bottom: 0px;
    }
    :hover {
      box-shadow: var(--shadow-4);
      span {
        color: var(--primary-5);
      }
      cursor: pointer;
    }
    h5 {
      color: var(--primary-5);
    }
    img {
      max-width: 150px;
    }
    span {
      color: var(--grey-5);
    }
  }
  /* Media query */

  .icon {
    width: 30px;
  }
  .social-icons {
    .title {
      color: var(--black);
    }
    width: 210px;
    margin: 0 auto;
    img {
      max-width: 150px;
      border-radius: 0px;
    }

    ul {
      a {
      }
      display: flex;
      gap: 1rem;
      justify-content: space-between;
    }
  }
`

export default SaniaCard
