import {useState} from 'react'

function Login({userName, setUserName, password, setPassword, setUser, toggleAuth, setToggleAuth, setMessage}) {

    const [user, setUserObj] = useState({
        username: "",
        password: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:9393/login",{
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(user)
        })
        .then(resp => {
          if (resp.ok) {
            resp.json().then(userObj => {
              setUser(userObj.user)
              setMessage("User successfully logged in!")
            })
          } else {
            resp.json().then(messageObj => setMessage(messageObj.message))
          }
        })
    }

    const handleChange = (e) => {
        setUserObj((currentUser) => (
            {...currentUser, [e.target.name]: e.target.value}
        ))
    }


    return (
        <div className="form">
            <form className="formInput" onSubmit={handleSubmit}>
                <label className="text" for="name">Username</label>
                <input className="inputs" type="username" name="username" onChange={handleChange} value={user.username} placeholder='username'/>
                <label className="text" for="password">Password</label>
                <input className="inputs" name="password" type="password" maxLength="32" autoComplete="off" onChange={handleChange} value={user.password} placeholder='password'/>
                <button className="logButton" type="submit" name="submit" value={"Login"}>Log In</button>
                <button className="logButton" type="click" onClick={() => setToggleAuth(currentValue => !currentValue)} value={toggleAuth}>Sign up</button>
            </form>
        </div>
    )
}

export default Login