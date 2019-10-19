import axios from 'axios'
import { createError } from './util'

const request = axios.create({
  baseURL: '/'
})

const handleRequest = (request) => {
  return new Promise((resolve, reject) => {
    request.then(resp => {
      const data = resp.data
      console.log('========' + data)
      // if (!data) {
      //   return reject(createError(400, 'no data'))
      // }
      // if (!data.success) {
      //   return reject(createError(400, data.message))
      // }
      resolve()
    }).catch((err) => {
      const resp = err.response
      console.log('---------------', resp)
      if (resp.status === 401) {
        reject(createError(401, 'need auth'))
      }
    })
  })
}

export default {
  getUserInfo () {
    return handleRequest(request.get('/blogger/user/getUserInfo'))
  }
}
