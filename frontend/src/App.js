import './App.css';
import Posts from './Components/Posts'
import Post from './Components/Post'
import Login from './Components/Login'
import NewPost from './Components/NewPost'
import Navbar from './Components/Navbar';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import SignUp from './Components/SignUp';


export const AppContext = React.createContext();

function App() {
  const [posts, setPosts] = useState([]);  
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);  
  const [message, setMessage] = useState(null);
  const [toggleAuth, setToggleAuth] = useState(false);

  const [page, setPage] = useState("/home")

  useEffect(() => {
    fetch("http://localhost:9393/posts")
    .then(resp => resp.json())
    .then(data => setPosts(data))//setPost(data))
  }, []);

  if (!user) {
    return (toggleAuth && <Login setUser={setUser} toggleAuth={toggleAuth} setToggleAuth={setToggleAuth} setMessage={setMessage} userName={userName} setUserName={setUserName} password={password} setPassword={setPassword}/>) || (<SignUp setUser={setUser} setToggleAuth={setToggleAuth} setMessage={setMessage} toggleAuth={toggleAuth}/>)
  }


 
  return (
    <div className="App">
      {/* <AppContext.Provider value={setPosts}>
        {setPosts}
      </AppContext.Provider> */}

      <header className="App-header">
      </header>
      <Navbar setPage={setPage}/>
      <Routes>
        <Route path="/login" element={<Login userName={userName} setUserName={setUserName} password={password} setPassword={setPassword} setPage={setPage}/>}/>
        <Route path="/signup" element={<SignUp setPage={setPage}/>}/>
        <Route path="/posts" element={<Posts posts={posts} setPosts={setPosts}/>}/>
        <Route path="/newPost" element={<NewPost/>}/>
        <Route path="*" element={<Posts posts={posts} setPosts={setPosts}/>}/>
      </Routes>
    </div>
  );
}

export default App;
