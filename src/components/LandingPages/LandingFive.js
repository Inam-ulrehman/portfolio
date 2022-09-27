import React from 'react'

import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { MdSupportAgent, MdMarkEmailRead } from 'react-icons/md'
import { GiTakeMyMoney } from 'react-icons/gi'

const LandingFive = () => {
  return (
    <Wrapper>
      <div className='heading-box'>
        <Link to='/blog'>
          <h1>Blog </h1>
        </Link>
        <p>
          We've written some insightful, entertaining articles that span topics
          from support to design to content management and beyond!
        </p>
        <div className='blog-holder'>
          <Link to='/Support'>
            <div className='blogging'>
              <MdSupportAgent className='iconic' />
              <h4>Customer Support</h4>
              <p>
                Investing in top-notch customer service and buyer support is
                another crucial aspect of operating a successful E-commerce
                business.
              </p>
            </div>
          </Link>
          <Link to='/contact'>
            <div className='blogging'>
              <GiTakeMyMoney className='iconic' />
              <h4>Post-Sales</h4>
              <p>
                Your job isn’t over when a customer has completed a sale. It’s
                valuable to stay in touch with your consumers and receive
                feedback,
              </p>
            </div>
          </Link>
          <Link to='/SmallBusinessBlog'>
            <div className='blogging'>
              <MdMarkEmailRead className='iconic' />
              <h4>Email Newsletters</h4>
              <p>
                To help push the word out about your business and make people
                aware of deals, membership sign-up incentives very helpful and
                powerful tool.
              </p>
            </div>
          </Link>
        </div>
        <div className='blog-btn'>
          <Link to='/SmallBusinessBlog' className='btn btn-hipster'>
            Read all Blogs
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.article`
  padding: 1rem;
  .heading-box {
    h1 {
      color: var(--black);
      transition: var(--transition);
      max-width: 100px;

      :hover {
        color: var(--primary-5);
      }
    }
    p {
      padding: 1rem;
    }
  }
  .blog-holder {
    display: flex;
    h4 {
      color: var(--primary-5);
    }
    p {
      margin: 0;
      padding: 0;
      padding-left: 4px;
      color: var(--grey-5);
    }
    @media (max-width: 768px) {
      display: grid;
    }

    .blogging {
      border: 2px solid var(--white);
    }
  }
  .blog-btn {
    a {
      margin: 3rem;
    }
  }
  .blogging {
    text-align: center;
    box-shadow: var(--shadow-2);
    transition: var(--transition);
    :hover {
      box-shadow: var(--shadow-4);
      cursor: pointer;
    }
  }
  .iconic {
    margin-top: 1rem;
    color: var(--primary-5);
    font-size: 2rem;
  }
`
export default LandingFive
