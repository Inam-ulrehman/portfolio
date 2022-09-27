import React from 'react'
import facebook from '../../images/facebook.svg'
import instagram from '../../images/instagram.svg'
import linkedin from '../../images/linkedin.svg'

import styled from 'styled-components'
const inam =
  'https://res.cloudinary.com/inam6530/image/upload/v1664285235/WhatsApp_Image_2022-09-27_at_8.34.24_AM_-_Edited_1_sxemsc.png'

const ShubhamCard = () => {
  return (
    <Wrapper>
      <div className='cart'>
        <h5>Marketing Manager</h5>
        <img src={inam} alt='' />
        <p>
          Name: <span>Shubham Angra</span>
        </p>
        <p>
          Phone: <span>5195025552</span>
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
      max-width: 100px;
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

export default ShubhamCard
