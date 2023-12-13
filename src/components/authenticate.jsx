import { useState } from "react"

export default function Authenticate ({token}) {
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [data, setData] = useState({})

    async function handleClick () {
        setError(null)
        setSuccess(null)
        try {
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', 
              { 
                method: "GET", 
                headers: { 
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${token}` 
                }
              })
              const result = await response.json()
              setSuccess(result.message)
              console.log(result)
              setData(result.data.username)
        }
        catch (error) {setError(error.message)}
    }
    
    if (token) {
    return (
        
        <div>
        <h3> Authenticate </h3> 
        {error &&  (<p className ="error"> {error} </p>) }
        {success && success !== "jwt malformed" && 
            (<div> <p className ="success"> {success} </p> <p className="info"> Your username is: <em> {data.username} </em> </p> </div>) }
         
        
        <button onClick={handleClick}> Authenticate Token </button>
        </div>
    )
    } else {
        return <> </>
    }
}