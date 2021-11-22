import axios from "axios"

const BASE_URL = "http://localhost:7000/api/"

const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOGE0ZDQyMmEyMjZjZjIwODM5ZWI3NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzYwNDM2NCwiZXhwIjoxNjM3ODYzNTY0fQ.ftXZUlulYME_L7Ie8Xzo-mOSOWz9yyX8s6vbxc2MrEA"

export const publicRequest = axios.create(
          {
                    baseURL: BASE_URL,
          }
)

export const userRequest = axios.create(
          {
                    baseURL: BASE_URL,

                    headers: {
                              token: `Bearer ${TOKEN}`
                    }
          }
)