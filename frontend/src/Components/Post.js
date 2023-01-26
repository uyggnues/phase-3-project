import CreateComment from './CreateComment'
import Comments from './Comments'
import React, { useState, useContext } from 'react'
import { AppContext } from "../App"

function Post({post, setComments}){
    const [comment, setComment] = useState(false)
    const [heart, setHeart] = useState(true)

    const setPosts = useContext(AppContext)
    // debugger

    const handleClick = (post) => {
        if (heart){
            setHeart(currentValue => !currentValue)
            // post.likes += 1
            fetch(`http://localhost:9393/posts/${post.id}/increment`, {
                method: "PATCH",
                header: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({post})
            })
        .then(res => res.json())
        .then(data => {
            setPosts((current) => [...current[current.findIndex(post)] = data])
        })
        debugger
        } else {
            setHeart(currentValue => !currentValue)
            post.likes -= 1
            fetch(`http://localhost:9393/posts/${post.id}/decrement`, {
                method: "PATCH",
                header: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({post})
            })
        .then(res => res.json())
        .then(data => console.log(data))
        }
    }


    return(
        
        <div className="post">
            <h2 className="text">{post.username}</h2>
            <img className="image" src={post.image} alt="post"/>
            <p className='likes'>
            <button className="heart" onClick={() => handleClick(post)} value={heart}>{heart ? '🖤' : '💗'}</button>
                {post.likes}</p>
            <p className='caption'>{post.caption}</p>
            <p className='posted'>Posted: {post.date.slice(0, 10)}</p>
            <button className='commentButton' onClick={() => setComment(currentValue => !currentValue)} value={comment}>Comment</button>
            <>{comment ? 
                <div className='comOutline'>
                <h2 className="comTitle">Comments</h2>
                <div className='commentSection'>
                <Comments comments={post.comments} post={post}/>
                </div>
                    <form className='input'> 
                        <input className='commentInput' placeholder='Add a comment'/>
                        <button className='inputButton' onClick={CreateComment}> send </button>
                    </form>
                </div>
                :
                null
                }
                </>
            </div>
    )
}

export default Post