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

    useEffect(() => {
        submitTransaction()
        return () => {
        }
    }, [])

    return (
        <>
            <div>
                <h1> Client </h1>
            </div>
        </>
    )
}

export default App
