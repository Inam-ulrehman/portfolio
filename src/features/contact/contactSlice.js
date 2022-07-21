import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import axios from 'axios'
import { toast } from 'react-toastify'

const initialState = {
  name: '',
  email: '',
  phone: '',
  comments: '',
  isLoading: false,
}

export const contactThunk = createAsyncThunk(
  'contact/contactThunk',
  async (contact, thunkApi) => {
    try {
      // will make post route ....
      // const url = 'waiting for endpoint'
      // const resp = await axios.post(url, contact)
      console.log(contact)
    } catch (error) {
      console.log(error.response)
    }
  }
)

const userSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    getContactData: (state, { payload }) => {
      const { name, value } = payload
      state[name] = value
      console.log(payload)
    },
  },
  extraReducers: {
    [contactThunk.pending]: (state) => {
      state.isLoading = true
    },
    [contactThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      toast.success('success')
    },
    [contactThunk.rejected]: (state) => {
      state.isLoading = true
      toast.success('error')
    },
  },
})

export const { getContactData } = userSlice.actions
export default userSlice.reducer
