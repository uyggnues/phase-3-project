import { useState } from "react"

function NewPost({}){
    const [newPost, setNewPost] = useState({
        caption: "",
        date: new Date(),
        likes: 0,
        image: ""
        //add user, when login is working
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
        .then(data => console.log(data))
        .catch((error) => {
            console.log(error)
          })

          setNewPost({
            caption: "",
            date: new Date(),
            likes: 0,
            image: "",
        });
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label for="caption">Caption</label>
                <input type="text" name="caption" onChange={handleChange} value={newPost.caption}/>
                <label for="image">Image</label>
                <input type="text" name="image" onChange={handleChange} value={newPost.image}/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default NewPost