import {useState} from 'react'

export default function SignupForm ({setToken, token}) {
    //state variables 
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    
    // functions
    async function handleSubmit(event) {
        event.preventDefault()
        setError(null)
        if (username.length >= 8 && password.length >= 8) {
        try {
            const response = await fetch ("https://fsa-jwt-practice.herokuapp.com/signup", { 
                method: "POST", 
                headers: { 
                  "Content-Type": "application/json" 
                }, 
                body: JSON.stringify({ 
                  username: {username}, 
                  password: {password}
                }) 
              })
            const result = await response.json()
            console.log(result)
            setToken(result.token)
            setSuccess(result.success)
            setUsername("")
            setPassword("")
        }
        catch (error) {
            setError(error.message)
        } } else if (username.length <8) {
            setError("username needs to be 8 characters")
        } else if (password.length <8) {
            setError("password needs to be 8 characters")
        }
    }

    // return
    return (
        <>
        <form onSubmit={handleSubmit}> 
        <h2> Sign Up </h2> 
        {error && <p className="error"> {error} </p> }
        <label> Username: 
            <input value={username} onChange = {(event) => {setUsername(event.target.value)}}/>
        </label>
        <label> Password:
            <input value={password} onChange = {(event) => {setPassword(event.target.value)}} />
        </label> 
        <button type="submit" value="submit"> Submit </button> 
        {success && <p className="success"> Please authenticate your username below </p>}
        </form>
        </> 
    )
}