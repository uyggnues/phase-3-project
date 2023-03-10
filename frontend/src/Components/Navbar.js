import { useState } from 'react';

function Navbar({setPage, user}){
    const [more, setMore] = useState(false)

    return (
        <nav className="navbar" id="navbar">
            <a className="site-title" href="/posts" onClick={()=>{setPage("/posts")}}>Snap Shot</a>
            <ul>
                <button className='more2' onClick={() => setMore(current => !current)}>{user.username}</button> {
                    more ?
                    <div className='moreBox2'>
                        <li className="site" onClick={()=>{setPage("/newPost")}}><a href="newPost">Create Post</a></li>
                        <li className="site" onClick={()=>{setPage("/logout")}}><a href="logout">Logout</a></li>
                        <li className="site" onClick={()=>{setPage("/account")}}><a href="account">Account</a></li>
                    </div>
                :
                null
                }
            </ul>
        </nav>
    )
}

export default Navbar