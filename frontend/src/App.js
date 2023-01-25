import './App.css';
import Posts from './Components/Posts'
import LogIn from './Components/LogIn'
import NewPost from './Components/NewPost'
import { useState, useEffect } from 'react';
import SignUp from './Components/SignUp';

function App() {
  const [posts, setPosts] = useState([]);  
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:9393/posts")
    .then(resp => resp.json())
    .then(data => setPosts(data))//setPost(data))
  }, []);

 
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <LogIn userName={userName} setUserName={setUserName} password={password} setPassword={setPassword}/>
      <SignUp/>
      <Posts posts={posts}/>
      <NewPost/>
    </div>
  );
}

export default App;
