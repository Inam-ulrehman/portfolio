import { React, useState, useEffect } from 'react'
import styled from 'styled-components'
import image from '../../images/e-ecommerce.svg'
import Logo from '../Logo'
import BlogTwoHolder from './BlogTwoHolder'

const BlogTwo = () => {
  const [loading, setLoading] = useState(true)
  const [blog, setBlog] = useState([])

  const url =
    'https://inamportfolioproject.herokuapp.com/api/v1/products/static'

  const fetchData = async () => {
    try {
      setLoading(true)
      const result = await fetch(url)
      const data = await result.json()
      setLoading(false)
      setBlog(data)
    } catch (error) {
      console.log(error)
    }

    return
  }

  useEffect(() => {
    fetchData()
  }, [])
  if (loading) {
    return (
      <div>
        <div className='loading'></div>
        <h3 className='title'>Loading...</h3>
      </div>
    )
  }
  return (
    <Wrapper>
      <div className='image-box'>
        <div className='text'>
          <Logo className='logo' />
          <p>
            <span>{blog.nbHits} things </span>You Need to Consider Before
            Starting an E-commerce Business
          </p>
        </div>
        <div className='img-holder'>
          <img src={image} alt='' />
        </div>
      </div>
      <hr />
      <div className='blog-box'>
        {blog.products.map((item) => {
          const { id } = item
          return <BlogTwoHolder key={id} {...item} />
        })}
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.article`
  .image-box {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .logo {
    h3 {
      font-size: var(--small-text);
      padding: 1rem;
    }
  }
  .img-holder {
    overflow: hidden;
    img {
      max-width: 100%;
      max-height: 400px;
    }
  }
  .text {
    max-width: 400px;
    margin: 0 auto;
    p {
      padding: 10px;
    }
    span {
      color: var(--primary-5);
    }
  }
  .blog-heading {
    display: flex;
  }
  .blog-article {
    span {
      color: var(--primary-5);
    }
    p {
      padding: 10px;
    }
  }
`

export default BlogTwo
