import React from 'react'

import { Link } from 'react-router-dom'
import styled from 'styled-components'

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
          <div className='blogging'>
            <h4>Mario Blog</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              illo harum iure, aliquam odio itaque quam excepturi doloremque hic
              expedita.
            </p>
          </div>
          <div className='blogging'>
            <h4>Kelly Blog</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              illo harum iure, aliquam odio itaque quam excepturi doloremque hic
              expedita.
            </p>
          </div>
          <div className='blogging'>
            <h4>Sara Blog</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              illo harum iure, aliquam odio itaque quam excepturi doloremque hic
              expedita.
            </p>
          </div>
        </div>
        <div className='blog-btn'>
          <Link to='/blog' className='btn btn-hipster'>
            Read all Blogs
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.article`
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
    p {
      margin: 0;
      padding: 0;
      padding-left: 4px;
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
`
export default LandingFive
