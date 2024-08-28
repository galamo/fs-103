import express, { Response } from "express"
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser"
dotenv.config()

const app = express()

app.use(bodyParser.json())
app.use(cors())

const accounts: { [accountId: number]: number } = {};
const history = []

app.get("/", (req, res, next) => {
    res.send("Api is Ok")
})

enum Operations {
    DEPOSIT = "deposit",
    WITHDRAW = "withdraw"
}

app.post("/account/operation", (req, res, next) => {
    const data = req.body
    const { accountId, amount, operation } = data as { accountId: number, amount: number, operation: Operations };
    history.push({ accountId, operation, amount, timeStamp: new Date().toISOString() })
    if (operation?.toLowerCase() === Operations.DEPOSIT) {
        if (accounts[accountId]) {
            accounts[accountId] = amount + accounts[accountId];
        } else {
            history.push({ accountId, operation: "newAccount", amount, timeStamp: new Date().toISOString() })
            accounts[accountId] = amount;
        }
        res.json({ accountId, amount: accounts[accountId] })
    } else if (operation?.toLowerCase() === Operations.WITHDRAW) {
        if (accounts[accountId]) {
            accounts[accountId] = accounts[accountId] - amount;
        } else {
            history.push({ accountId, operation: "newAccount", amount, timeStamp: new Date().toISOString() })
            accounts[accountId] = -amount;
        }
        res.json({ accountId, amount: accounts[accountId] })
    } else {
        return res.status(403).json({ message: "operation is not permitted" })
    }


})






app.listen(process.env.API_PORT, () => {
    console.log(`Api is running on port: ${process.env.API_PORT}`)
})