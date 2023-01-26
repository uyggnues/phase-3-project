import Post from "./Post"
import React from 'react'


function Posts({posts}){
    const display = posts.map((post) => {
        return <Post key={`post-${post.id}`} post={post}/>
    })

return(
    
    <div className="posts">
                <div className="header" >Snap Shot</div>
                <div className="dis">
                    {display}
                </div>
        </div>
    )
}

export default Posts