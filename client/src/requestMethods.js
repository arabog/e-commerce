import axios from "axios"


const BASE_URL ="http://localhost:7000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOGE0ZDQyMmEyMjZjZjIwODM5ZWI3NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzE0Mjk1NywiZXhwIjoxNjM3NDAyMTU3fQ.m71PWaE5u6bAx0amOl1JyuIuznhKyBDQ5i1gHcmKNyw"


export const publicRequest = axios.create(
          {
                    baseURL: BASE_URL,
          }
)


export const userRequest = axios.create(
          {
                    baseUrs: BASE_URL,

                    header: {
                              token: `Bearer ${TOKEN}`
                    }
          }
)