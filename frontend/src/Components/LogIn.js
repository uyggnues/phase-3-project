function LogIn({userName, setUserName, password, setPassword}) {
    const handleSubmit = () => {

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