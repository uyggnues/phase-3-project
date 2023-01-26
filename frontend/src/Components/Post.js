import CreateComment from './CreateComment'
import Comments from './Comments'
import React, { useState, useContext } from 'react'
// import { AppContext } from "../App"

function Post({post, setComments, setPosts}){
    const [comment, setComment] = useState(false)
    const [heart, setHeart] = useState(true)
    const [sendCom, setSendCom] = useState({
        comment: ""
    })

    // const setPosts = useContext(AppContext)
    
    const handleChange = (e) => {
        setSendCom((currentUser) => (
            {...currentUser, [e.target.name]: e.target.value}
        ))
    }

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
            setPosts((current) => {
                const postId = current.findIndex(ele => ele.id === post.id)
                // const newArray = [...current]
                // newArray[postId] = data
                // return newArray
                return [...current.slice(0, postId), data, ...current.slice(postId + 1)]
            })
        })
        // debugger
        } else {
            setHeart(currentValue => !currentValue)
            // post.likes -= 1
            fetch(`http://localhost:9393/posts/${post.id}/decrement`, {
                method: "PATCH",
                header: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({post})
            })
        .then(res => res.json())
        .then(data => {
            setPosts((current) => {
                const postId = current.findIndex(ele => ele.id === post.id)
                return [...current.slice(0, postId), data, ...current.slice(postId + 1)]
            })
        })
        }
    }

    const handleComment = (e, post) => {
        e.preventDefault()
        fetch("http://localhost:9393/comments",{
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(sendCom)
        })
        .then(resp => resp.json())
        .then(data => {
            // debugger
            // setPosts()
        })

        setSendCom({
            comment: ""
        })
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
                    <form className='input' onSubmit={(e) => handleComment(post)(e)}> 
                        <input className='commentInput' name="comment" type="comment" placeholder='Add a comment' onChange={handleChange} value={sendCom.comment}/>
                        <button className='inputButton' type="submit" onClick={CreateComment}> send </button>
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