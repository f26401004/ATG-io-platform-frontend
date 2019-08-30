import Axios from 'axios'

const options = {
  baseURL: 'http://localhost:3000'
}

const instance = Axios.create(options)
// config axios timeout
instance.defaults.timeout = 5000

export default instance
