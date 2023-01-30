import './App.css';
import Posts from './Components/Posts'
import Login from './Components/Login'
import NewPost from './Components/NewPost'
import Navbar from './Components/Navbar';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import SignUp from './Components/SignUp';
import Logout from './Components/Logout';
import Account from './Components/Account'
import Cursor from './Components/Cursor';



function App() {
  const [user, setUser] = useState(JSON.parse(window.localStorage.getItem("user")));  
  const [message, setMessage] = useState(null);
  const [page, setPage] = useState('/login');
  //const [toggleAuth, setToggleAuth] = useState(false)
  const [posts, setPosts] = useState([]);

  

  useEffect(() => {
  fetch("http://localhost:9393/posts")
  .then(resp => resp.json())
  .then(data => setPosts(data))//setPost(data))
  }, []);
 
  return (
    <div className="App">
      <header className="App-header">
      </header>
      {user ? 
        <div>
          <Navbar setPage={setPage} user={user}/>
          <Cursor />
          <Routes>
              <Route path="/logout" element={<Logout user={user} setUser={setUser} setPage={setPage}/>}/>
              <Route path="/signup" element={<SignUp setPage={setPage}/>}/>
              <Route path="/posts" element={<Posts posts={posts} setPosts={setPosts} user={user}/>}/>
              <Route path="/newPost" element={<NewPost user={user} setPosts={setPosts}/>}/>
              <Route path="/account" element={<Account posts={posts} user={user} setPosts={setPosts}/>}/>
              <Route path="*" element={<Posts posts={posts} setPosts={setPosts} user={user}/>}/>
          </Routes>
        </div>
          : 
        <Routes>
            <Route path="/login" element={<Login setUser={setUser} setMessage={setMessage} setPage={setPage}/>}/>
            <Route path="/signup" element={<SignUp setPage={setPage}/>}/>
            <Route path="*" element={<Login setUser={setUser} setMessage={setMessage} setPage={setPage}/>}/>
            <Route path="*" element={<Login setUser={setUser} setMessage={setMessage} setPage={setPage}/>}/>
        </Routes>
      }
    </div>
  );
}

export default App;
