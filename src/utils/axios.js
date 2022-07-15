import axios from 'axios'

// === UserData Root Url ===//

export const customFetchUser = axios.create({
  baseURL: 'https://inamportfolioproject.herokuapp.com/',
})
