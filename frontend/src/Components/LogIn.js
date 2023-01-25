import { useState } from "react"

function LogIn({setPage}) {
    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(user)

        fetch("http://127.0.0.1:9393/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => {
            if (res.ok){
                res.json().then(userObj => console.log(userObj))
            }else{
                res.json().then(messageObj => console.log(messageObj.message))
            }         
        })
        .then(data => console.log(data))
        .catch((error) => {
            console.log(error)
          })
    }

    const handleChange = (e) => {
        setUser({...user, [e.target.name]:e.target.value})
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <label for="name">User Name</label>
                <input type="text" name="username" onChange={handleChange} value={user.username}/>
                <label for="password">Password</label>
                <input type="password" name="password" maxlength="32" autocomplete="off" onChange={handleChange} value={user.password}/>
                <input type="submit" name="submit" value={"Login"}/>
            </form>
            <p>or</p>
            <a onClick={()=>{setPage("/signup")}} href="signup">Sign up</a>
        </div>
    )
}

export default LogIn