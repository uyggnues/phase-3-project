import { useState } from "react"
import { useNavigate } from "react-router-dom";
import validator from 'validator'

function NewPost({user, setPosts}){
    const navigate = useNavigate()
    const [newPost, setNewPost] = useState({
        user: user,
        username: user.username,
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
        if (newPost.image) {

            fetch("http://127.0.0.1:9393/posts", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(newPost)
            })
            .then(res => res.json())
            .then(post => {
                // debugger
                setPosts(current => {
                    // debugger
                    return[post, ...current]
                })
            })
            .catch((error) => {
                console.log(error)
            })
        } else {
            alert("image_url must be filled out")
        }

        setNewPost({
            caption: "",
            image: "",
        });
        navigate('/posts');
        
    }

    return(
        <div className="form">
            <form className="formInput3" onSubmit={handleSubmit}>
            <div className="newPostImage">
                {validator.isURL(newPost.image) ? <img className="image2" src={newPost.image} alt="Invalid"/> : <p className="imgText">
                Place Image_url here
                </p>}
            </div>
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