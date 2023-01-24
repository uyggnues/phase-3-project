import './App.css';
import Post from './Components/Post'
import { useState, useEffect } from 'react';

function App() {
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/posts")
    .then(resp => resp.json())
    .then(data => console.log(data))//setPost(data))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      {/* <Post post={post}/> */}
    </div>
  );
}

export default App;
