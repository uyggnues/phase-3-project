import Comment from './Comment'

function Comments({comments, post}){
    const display = comments.map((comment) => {
        return <Comment key={`post-${post.id}-comment-${comment.id}`} comment={comment}/>
    })

    return(
        <div className='comments'>
            {display}
        </div>
    )
}

export default Comments