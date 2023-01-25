import './App.css';
import Posts from './Components/Posts'
import Login from './Components/Login'
import NewPost from './Components/NewPost'
import { useState, useEffect } from 'react';
import SignUp from './Components/SignUp';

function App() {
  const [posts, setPosts] = useState([]);  
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);  
  const [message, setMessage] = useState(null);
  const [toggleAuth, setToggleAuth] = useState(false);

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
      <header className="App-header">
      </header>
      <Posts posts={posts}/>
      <NewPost/>
    </div>
  );
}

export default App;
