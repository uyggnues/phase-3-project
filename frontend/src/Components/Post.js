import CreateComment from './CreateComment'
import Comments from './Comments'
import {useState} from 'react'

function Post({post}){
const [comment, setComment] = useState(false)

const createComment = () => {

}
    return(
        <div className="post">
            <h1>{post.username}</h1>
            <img className="image" src={post.image} alt="post"/>
            <p className='likes'>{post.likes} Likes</p>
            <p className='caption'>{post.caption}</p>
            <p className='posted'>Posted: {post.date}</p>
            <button className='commentButton' onClick={() => setComment(currentValue => !currentValue)} value={comment}>Comment</button>
            <>{comment ? 
                <>
                <div className='commentSection'>
                <h2>Comments</h2>
                <Comments comments={post.comments} post={post}/>
                </div>
                    <form className='input'> 
                        <input className='commentInput' placeholder='Add a comment'/>
                        <button className='inputButton' onClick={createComment}> send </button>
                    </form>
                </>
                :
                null
                }
            </>
        </div>
    )
}

export default Post