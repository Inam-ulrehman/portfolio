import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../Footer/Footer'
import facebook from '../../images/facebook.svg'
import instagram from '../../images/instagram.svg'
import linkedin from '../../images/linkedin.svg'
import url from '../../images/Inspiration.svg'

const inam =
  'https://res.cloudinary.com/inam6530/image/upload/v1658341599/inam_gmuuw3.png'

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
      <div className='box'>
        <div className='box-1 hide'></div>
        <div className='box-2'>
          <h1 className='box-1-text'>A Web Design Family</h1>
          <h5>
            We put more experts behind your success than any other web design
            company.
          </h5>
        </div>
      </div>
      <div className='img-holder'>
        <img src={url} alt='' />
      </div>
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
          <p>
            Our team embodies our guiding principles in everything we do and we
            constantly find new ways to put our business website customers ahead
            of their competition.
          </p>
        </div>
        <Link to='/about'>
          <div className='cart'>
            <h3>Web Developer</h3>
            <img src={inam} alt='' />
            <p>
              Name: <span>Inam ul Rehman</span>
            </p>
            <p>
              Phone: <span>4165606790</span>
            </p>
            <div
              className='title-underline'
              style={{ marginTop: '1rem' }}
            ></div>
            {/* Social icons in cart */}
            <div className='social-icons'>
              <h4 className='title'>SOCIAL MEDIA</h4>
              <ul>
                <li>
                  <a
                    href='https://facebook.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img className='icon' src={facebook} alt='' />
                  </a>
                </li>
                <li>
                  <a
                    href='https://instagram.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img className='icon' src={instagram} alt='' />
                  </a>
                </li>
                <li>
                  <a
                    href='https://linkedin.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img className='icon' src={linkedin} alt='' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Link>
      </div>

      <hr />
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .img-holder {
    height: auto;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .box-two {
    text-align: center;

    h4 {
      max-width: 400px;
      margin: 0 auto;
    }
  }
  .cart {
    margin: 1rem auto;
    /* border: 2px solid var(--black); */
    max-width: 300px;
    box-shadow: var(--shadow-2);
    transition: var(--transition);
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
    h3 {
      color: var(--primary-5);
    }
    img {
      max-width: 150px;
      border-radius: 15px 50px;
    }
    span {
      color: var(--grey-5);
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
    .box-two {
      display: grid;
      grid-template-columns: 1fr 280px;
    }
  }
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

export default BlogOne
