import Axios from 'axios'

const options = {
  baseURL: '/'
}

const instance = Axios.create(options)
// config axios timeout
instance.defaults.timeout = 5000

export default instance
