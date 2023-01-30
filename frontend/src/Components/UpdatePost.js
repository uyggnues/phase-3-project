import { useState } from "react"

function UpdatePost({post, setPosts}){
    const [update, setUpdate] = useState({
        caption: "",
        post_id: post.id
    });

    const handleChange = (e) => {
        setUpdate({...update, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(update)
        console.log(JSON.stringify(update))
        fetch(`http://localhost:9393/posts/${post.id}`, {
            method: 'PATCH',
            header: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(update)
        })
        .then(res => res.json())
        .then(post =>             
            setPosts(current => {
            const postId = current.findIndex(ele => ele.id === post.id)
            return [...current.slice(0, postId), post, ...current.slice(postId + 1)]
        }))
    }

    return(
        <div>
            <form className="formInput3" onSubmit={handleSubmit}>
                <label className="text" >Caption</label>
                <input className="inputs"type="text" name="caption" onChange={handleChange} value={update.caption} placeholder="caption"/>
                <input className="logButton" type="submit"/>
            </form>
        </div>
    )
}

export default UpdatePost