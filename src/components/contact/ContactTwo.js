import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import {
  contactThunk,
  getContactData,
} from '../../features/contact/contactSlice'

const ContactTwo = () => {
  const { contact } = useSelector((state) => state)
  const dispatch = useDispatch()

  // const handle submit

  const handleSubmit = (e) => {
    const { name, email, phone, comments, isLoading } = contact
    e.preventDefault()
    if (!name || !email || !phone || !comments || isLoading) {
      return toast.warning('please fill all the fields in form.')
    } else {
      dispatch(contactThunk({ contact }))
    }
  }

  // handle change
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    dispatch(getContactData({ name, value }))
  }
  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className='form'>
        <h3 className='title'>Contact Us</h3>
        <div className='title-underline'></div>

        <div>
          {/* name input */}
          <label htmlFor='name' className='form-label'>
            Full Name
          </label>
          <input
            className='form-input'
            type='text'
            name='name'
            id='name'
            value={contact.name}
            onChange={handleChange}
          />
          {/* email input */}
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            className='form-input'
            type='text'
            name='email'
            id='email'
            value={contact.email}
            onChange={handleChange}
          />
          {/* phone input */}
          <label htmlFor='phone' className='form-label'>
            Contact Number
          </label>
          <input
            className='form-input'
            type='number'
            name='phone'
            id='phone'
            value={contact.phone}
            onChange={handleChange}
          />
          {/* Comment input */}
          <label htmlFor='comments' className='form-label'>
            Message
          </label>
          <textarea
            className='form-input'
            type='text'
            name='comments'
            id='comments'
            value={contact.comments}
            onChange={handleChange}
            cols='60'
            rows='5'
          />
        </div>
        <button type='submit' className='btn btn-block'>
          Submit
        </button>
      </form>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  align-items: center;
`
export default ContactTwo
