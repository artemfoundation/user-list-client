import axios from 'axios'
import config from '../config'

axios.defaults.baseURL = config['apiURL']

export default axios.create({})
