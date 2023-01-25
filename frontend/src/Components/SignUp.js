import { useState, useEffect } from "react"

function SignUp({setPage}) {
    const [newUser, setNewUser] = useState({
        FirstName: "", 
        LastName: "", 
        Email: "", 
        UserName:"", 
        Password:"", 
        ConfirmPassword:""
    });

    const handleSubmit = (e) => {
        e.preventDefault()

        const addNewUser = {
            first_name: newUser.FirstName,
            last_name: newUser.LastName,
            username: newUser.UserName,
            password: newUser.Password,
            email: newUser.Email
        }

        fetch("http://127.0.0.1:9393/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(addNewUser)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch((error) => {
            console.log(error)
          })
    }

    const handleChange = (e) => {
        setNewUser({...newUser, [e.target.name]:e.target.value})
    }

    return (
        <div className="signup">
            <form onSubmit={handleSubmit}>
                <label for="FirstName">First Name</label>
                <input type="text" name="FirstName" onChange={handleChange} value={newUser.FirstName}/>
                <label for="LastName">Last Name</label>
                <input type="text" name="LastName" onChange={handleChange} value={newUser.LastName}/>
                <label for="UserName">User Name</label>
                <input type="text" name="UserName" onChange={handleChange} value={newUser.UserName}/>
                <label for="Email">email</label>
                <input type="text" name="Email" onChange={handleChange} value={newUser.Email}/>
                <label for="Password">Password</label>
                <input type="password" name="Password" accesskey="P" maxlength="32" autocomplete="off" onChange={handleChange} value={newUser.Password}/>
                <label for="ConfirmPassword">Confirm Password</label>
                <input type="password" name="ConfirmPassword" accesskey="P" maxlength="32" autocomplete="off" onChange={handleChange} value={newUser.ConfirmPassword}/>
                <input type="submit" />
            </form>
            <p>Have an account?</p>
            <a onClick={()=>{setPage("/login")}} href="login">Login</a>
        </div>
    )
}

export default SignUp