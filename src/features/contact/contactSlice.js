import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
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
      const result = contact.contact
      const url = 'https://inamportfolioproject.herokuapp.com/api/v1/contacts'
      const resp = await axios.post(url, result)

      return resp.data.contactName
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data)
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
    },
  },
  extraReducers: {
    [contactThunk.pending]: (state) => {
      state.isLoading = true
    },
    [contactThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      toast.success(`Dear ${payload}, Team Member contact you shortly.`)
      state.name = ''
      state.email = ''
      state.phone = ''
      state.comments = ''
    },
    [contactThunk.rejected]: (state, { payload }) => {
      state.isLoading = true
      toast.error(payload)
    },
  },
})

export const { getContactData } = userSlice.actions
export default userSlice.reducer
