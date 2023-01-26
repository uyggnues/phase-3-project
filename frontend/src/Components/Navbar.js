function Navbar({setPage}){
    return (
        <nav className="navbar" id="navbar">
            <a className="site-title" href="/posts" onClick={()=>{setPage("/posts")}}>Snap Shot</a>
            <ul>
                <li onClick={()=>{setPage("/newpost")}}><a href="newpost">Create Post</a></li>
                <li onClick={()=>{setPage("/logout")}}><a href="logout">Logout</a></li>
                <li onClick={()=>{setPage("/account")}}><a href="account">Account</a></li>
            </ul>
        </nav>
    )
}

export default Navbar