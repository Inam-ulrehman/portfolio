import axios from 'axios'

// === UserData Root Url ===//

export const customFetchContact = axios.create({
  baseURL: 'https://inamportfolioproject.herokuapp.com/api/v1',
})
