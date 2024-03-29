import axios, {AxiosInstance} from "axios";


class Http {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
    })
  }
}

const http = new Http().instance
export default http