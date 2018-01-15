import baseAxios from 'axios'
// import router from '@/router'

const http = baseAxios.create({
  baseURL: 'http://5a5c4185d6221a0012962c82.mockapi.io'
})

http.interceptors.request.use(function (config) {
  const token = localStorage.getItem('authorization')

  if (token) {
    // config.headers.Authorization = 'bearer ' + token
  }

  return config
})

http.interceptors.response.use(function (response) {
  return response
}, function (error) {
  if (error.response.status === 401) {
    // router.push('/login')
  }
  return Promise.reject(error)
})

export default http
