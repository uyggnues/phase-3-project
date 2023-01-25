import CreateComment from './CreateComment'
import Comments from './Comments'
import {useState} from 'react'

function Post({post, setComments}){
const [comment, setComment] = useState(false)
    return(
        <div className="post">
            <p className="user">username</p>
            <img className="image" src={post.image} alt="post"/>
            <p className='likes'>{post.likes} Likes</p>
            <p className='caption'>username: {post.caption}</p>
            <p className='posted'>Posted: {post.date.slice(0,10)}</p>
            <button className='commentButton' onClick={() => setComment(currentValue => !currentValue)} value={comment}>comment</button>
            <>{comment ? 
                <>
                <div className='commentSection'>
                <h2 className="comTitle">Comments</h2>
                <Comments className="commentText"comments={post.comments} post={post}/>
                    <form className='input' > 
                        <input className='commentInput' placeholder='Add a comment' />
                        <button className='inputButton'> send </button>
                    </form>
                </div>
                </>
                :
                null
                }
            </>
        </div>
    )
}

export default Post