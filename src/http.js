import baseAxios from 'axios'

const http = baseAxios.create({
  baseURL: 'http://5a5c4185d6221a0012962c82.mockapi.io/'
})

export default http
