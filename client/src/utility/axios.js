import axios from "axios"

const instace = axios.create({
  // baseURL: "http://localhost:3000",
  baseURL: "https://blog.berkoca.com",
  headers: {
    authorization: `Bearer ${localStorage.getItem("jwt")}`
  }
})

export default instace
