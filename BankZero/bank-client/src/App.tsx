import { useEffect } from "react"
import './App.css'

import axios from 'axios'
function App() {

    async function submitTransaction() {
        try {
            const result = await axios.post("http://localhost:3500/account/operation", {
                accountId: "12345",
                amount: 600,
                operation: "withdraw"
            })
            console.log(result)
        } catch (error) {
            alert("error")
        }
    }

    async function getHistory() {
        try {
            const result = await axios.get("http://localhost:3500/account/history")
            console.log(result.data)
        } catch (error) {
            alert("error")
        }
    }

    useEffect(() => {
        submitTransaction()
        return () => {
        }
    }, [])

    return (
        <>
            <div>
                <h1> Client </h1>
                <button onClick={() => { getHistory() }}> History </button>
            </div>
        </>
    )
}

export default App
