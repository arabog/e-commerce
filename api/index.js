const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")


const cors = require("cors")

dotenv.config()


mongoose
          .connect(process.env.MONGO_URL)
          .then(() => console.log("DB Connection Successful"))
          .catch(err => {
                    console.log(err)
          })

app.use(cors)
app.use(express.json())

// app.use("/api/auth")


app.listen(process.env.PORT || 7000, () => {
          console.log("Backend Server Is Running!")
})