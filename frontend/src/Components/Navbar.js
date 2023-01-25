function Navbar({setPage}){
    return (
        <nav className="navbar" id="navbar">
            <a className="site-title" href="/home" onClick={()=>{setPage("/home")}}>Snap Shot</a>
            <ul>
                <li onClick={()=>{setPage("/create")}}><a href="newpost">Create Post</a></li>
                <li onClick={()=>{setPage("/login")}}><a href="login">Login</a></li>
                <li onClick={()=>{setPage("/account")}}><a href="account">Account</a></li>
            </ul>
        </nav>
    )
}

export default Navbar