function LogIn({userName, setUserName, password, setPassword}) {
    const handleSubmit = (e) => {
        e.preventDefault()

        const user ={
            username: userName,
            password: password
        }

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
        setUserName(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label for="name">User Name</label>
                <input type="text" name="name" onChange={handleChange} value={userName}/>
                <label for="password">Password</label>
                <input type="password" accesskey="P" maxlength="32" autocomplete="off" onChange={handlePassword} value={password}/>
                <input type="submit" name="submit" value={"Login"}/>
            </form>
        </div>
    )
}

export default LogIn