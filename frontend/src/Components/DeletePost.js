function DeletePost({post, setPosts}){
    const handleClick = () => {
        fetch(`http://127.0.0.1:9393/posts/${post.id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(post =>             
            setPosts(current => {
            const postId = current.findIndex(ele => ele.id === post.id)
            return [...current.slice(0, postId), ...current.slice(postId + 1)]
        }))
    }

    return(
        <div className="deleteButton">
            <button onClick={handleClick}>Remove Post</button>
        </div>
    )
}

export default DeletePost