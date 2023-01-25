function Comment({comment}){
    return(
        <div className="comment">
            <h1>{comment.username}</h1>
            <p>{comment.comment}</p>
        </div>
    )
}

export default Comment