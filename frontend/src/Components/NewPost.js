import { useState } from "react"
import { useNavigate } from "react-router-dom";

function NewPost({user, setPosts}){
    const navigate = useNavigate()
    const [newPost, setNewPost] = useState({
        caption: "",
        date: new Date(),
        likes: 0,
        image: ""
    });

    const handleChange = (e) => {
        setNewPost({...newPost, [e.target.name]:e.target.value})
    }
   
    const handleSubmit = (e) => {
        e.preventDefault()

        fetch("http://127.0.0.1:9393/posts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(newPost)
        })
        .then(res => res.json())
        .then(data => {
            // debugger
            setPosts(current => {
                // debugger
                const P = {...data, comments: []} 
                return[P, ...current]
            })
        })
        .catch((error) => {
            console.log(error)
        })

        setNewPost({
            caption: "",
            image: "",
        });
        navigate('/posts');
        
    }

    return(
        <div className="form">
            <div className="newPostImage">
                {validator.isURL(newPost.image) ? <img className="image" src={newPost.image} alt="new Image"/> : null}
            </div>
            <form className="formInput" onSubmit={handleSubmit}>
                <label className="text" >Caption</label>
                <input className="inputs"type="text" name="caption" onChange={handleChange} value={newPost.caption} placeholder="caption"/>
                <label className="text">Image_url</label>
                <input className="inputs"type="text" name="image" onChange={handleChange} onPaste={handleChange} value={newPost.image} placeholder="image_url"/>
                <input className="logButton" type="submit"/>
            </form>
        </div>
    )
}

export default NewPost