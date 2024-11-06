import axios from 'axios'

const api = axios.create({
  baseURL: 'https://sua-api.com',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
