import express, { Response } from "express"
import dotenv from "dotenv"
dotenv.config()

const app = express()

app.get("/", (req, res, next) => {
    res.send("Api is Ok")
})


app.listen(process.env.API_PORT, () => {
    console.log(`Api is running on port: ${process.env.API_PORT}`)
})