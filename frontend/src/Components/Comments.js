import Comment from './Comment'
import CreateComment from './CreateComment'

function Comments({comments, post, user, setPosts, comment, setComment}){
    const display = comments.map((comment) => {
        return <Comment key={`post-${post.id}-comment-${comment.id}`} comment={comment}/>
    })

    return(
        <div className="comOut">
            <h2 className="comTitle">Comments
            <button className='X' onClick={() => setComment(currentValue => !currentValue)} value={comment}>X</button>
            </h2>
            <div className='commentSection'>
                <div className='comments'>
                    {display}
                </div>
            </div>
            <CreateComment setPosts={setPosts} post={post} user={user}/>
        </div>
    )
}

export default Comments