import './App.css';
import Post from './Components/Post'
import image from './Meme.png'
import { useState, useEffect } from 'react';

function App() {
  const [post, setPost] = useState({});
  const comments = [
    "bingate10-Just remember that you are the product and not the customer. The companies paying for those ads are the customers.",
    `ThePositivePandemic-YouTube: "We’re having issues playing your video at 720p." \n \n Five ads at 1080p60:`,
    "Frisky_Potato42nite-I believe the ads are actually preloaded."
  ]

  useEffect(() => {
    fetch("http://127.0.0.1:9393/posts")
    .then(resp => resp.json())
    .then(data => console.log(data))//setPost(data))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Post post={post}/>
    </div>
  );
}

export default App;
