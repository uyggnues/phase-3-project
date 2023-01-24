import './App.css';
import Post from './Components/Post'
import { useState, useEffect } from 'react';

function App() {
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch("http://127.0.0.1:9393/posts")
    .then(resp => resp.json())
    .then(data => console.log(data))//setPost(data))
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
      <Post post={post}/>
    </div>
  );
}

export default App;
