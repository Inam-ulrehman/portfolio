import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { FaPlus, FaMinus } from 'react-icons/fa'

const SupportTwo = ({ id, title, description }) => {
  const [value, setValue] = useState(false)
  const handleValue = (e) => {
    setValue(!value)
  }
  useEffect(() => {}, [])
  return (
    <Wrapper>
      <div className='question-box'>
        <h4>
          <span>{id}</span> .{title}
        </h4>
        <button type='button' onClick={handleValue} className='button'>
          {value ? <FaMinus /> : <FaPlus />}
        </button>
      </div>
      {value && <p>{description}</p>}
      <hr />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  p {
    padding: 1rem;
  }
  .hide {
    display: none;
  }
  .question-box {
    display: flex;
    justify-content: space-between;
    h4 {
      span {
        color: var(--primary-5);
      }
    }
  }
  .button {
    background: transparent;
    border: transparent;
    color: var(--primary-5);
    padding: 1rem;
    :hover {
      cursor: pointer;
    }
  }
`
export default SupportTwo
