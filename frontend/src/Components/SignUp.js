import { useState, useEffect } from "react"

function SignUp({setUser, toggleAuth, setToggleAuth, setMessage, setPage}) {
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
        <div className="form">
            <form className="formInput2" onSubmit={handleSubmit}>
                <label className="text" for="FirstName">First Name</label>
                <input className="inputs" type="text" name="FirstName" onChange={handleChange} value={newUser.FirstName} placeholder='first name'/>
                <label className="text" for="LastName">Last Name</label>
                <input className="inputs" type="text" name="LastName" onChange={handleChange} value={newUser.LastName} placeholder='last name'/>
                <label className="text" for="UserName">Username</label>
                <input className="inputs" type="text" name="UserName" onChange={handleChange} value={newUser.UserName} placeholder='username'/>
                <label className="text" for="Email">email</label>
                <input className="inputs" type="text" name="Email" onChange={handleChange} value={newUser.Email} placeholder='email'/>
                <label className="text" for="Password">Password</label>
                <input className="inputs" type="password" name="Password" accessKey="P" maxLength="32" autoComplete="off" onChange={handleChange} value={newUser.Password} placeholder='password'/>
                <label className="text" for="ConfirmPassword">Confirm Password</label>
                <input className="inputs" type="password" name="ConfirmPassword" accessKey="P" maxLength="32" autoComplete="off" onChange={handleChange} value={newUser.ConfirmPassword} placeholder='confirm password'/>
                <button className="logButton" type="submit">Sign up</button>
                <button className="logButton" type="click" onClick={() => setToggleAuth(currentValue => !currentValue)} value={toggleAuth}>Log in</button>
            </form>
            <p>Have an account?</p>
            <a onClick={()=>{setPage("/login")}} href="login">Login</a>
        </div>
    )
}

export default SignUp