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
        <div className="form">
            <form className="formInput" onSubmit={handleSubmit}>
                <label className="text" for="name">Username</label>
                <input className="inputs" type="text" name="name" onChange={handleChange} value={userName} placeholder='username'/>
                <label className="text" for="password">Password</label>
                <input className="inputs" type="password" accessKey="P" maxLength="32" autoComplete="off" onChange={handlePassword} value={password} placeholder='password'/>
                <input className="logButton" type="submit" name="submit" value={"Login"}/>
            </form>
        </div>
    )
}

export default LogIn