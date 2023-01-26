function Comment({comment}){
    return(
        <div >
            <h1 className="comUser">{comment.username}</h1>
            <p className="comment">{comment.comment}</p>
        </div>
    )
}

export default Comment