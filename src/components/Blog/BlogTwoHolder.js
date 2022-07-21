import { React, useState } from 'react'
import styled from 'styled-components'

const BlogTwoHolder = ({ id, title, paragraph }) => {
  const [value, setValue] = useState(80)
  const [read, setRead] = useState(false)
  const handleClick = (length) => {
    setValue(length)
    setRead(!read)
  }
  return (
    <Wrapper className='blog-article'>
      <h3>
        <span>{id}</span>. {title}
      </h3>

      <p className='blog-paragraph'>
        {paragraph.substring(0, value)}
        <button onClick={() => handleClick(paragraph.length)}>
          {read ? '' : 'Read More'}
        </button>
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .blog-paragraph {
    margin: 0;
    padding: 0;
    button {
      background-color: transparent;
      border: transparent;
      color: var(--primary-5);
      :hover {
        cursor: pointer;
        color: var(--primary-7);
      }
    }
  }
`

export default BlogTwoHolder
