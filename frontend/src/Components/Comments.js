import Comment from './Comment'
import CreateComment from './CreateComment'

function Comments({comments, post, setPosts}){
    const display = comments.map((comment) => {
        return <Comment key={`post-${post.id}-comment-${comment.id}`} comment={comment}/>
    })

    return(
        <div className="comOut">
            <h2 className="comTitle">Comments</h2>
            <div className='commentSection'>
                <div className='comments'>
                    {display}
                </div>
            </div>
            <CreateComment setPosts={setPosts}/>
        </div>
    )
}

export default Comments