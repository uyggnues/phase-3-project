import './App.css';
import Posts from './Components/Posts'
import LogIn from './Components/LogIn'
import NewPost from './Components/NewPost'
import Navbar from './Components/Navbar';
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import SignUp from './Components/SignUp';

function App() {
  const [posts, setPosts] = useState([]);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [page, setPage] = useState("/home")

  useEffect(() => {
    fetch("http://127.0.0.1:9393/posts")
    .then(resp => resp.json())
    .then(data => setPosts(data))//setPost(data))
  }, []);

//   useEffect(()=> {
//     const fetchData = async () => {
//         try {
//             const resp = await fetch("http://127.0.0.1:9393/posts")
//             const post = await resp.json()
//             setPost(post)
//         } catch (error) {
//             alert(error)
//         }
//     }
//     fetchData()
//  }, [])



  return (
    <div className="App">
      <header className="App-header">

      </header>
      <Navbar setPage={setPage}/>
      <Routes>
        <Route path="/login" element={<LogIn userName={userName} setUserName={setUserName} password={password} setPassword={setPassword} setPage={setPage}/>}/>
        <Route path="/signup" element={<SignUp setPage={setPage}/>}/>
        <Route path="/posts" element={<Posts posts={posts}/>}/>
        <Route path="/newpost" element={<NewPost/>}/>
        <Route path="*" element={<Posts posts={posts}/>}/>
      </Routes>
    </div>
  );
}

export default App;
