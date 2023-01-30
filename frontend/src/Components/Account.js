import DeletePost from "./DeletePost"
import Post from "./Post"
import UpdatePost from "./UpdatePost"

function Account({posts, user, setPosts}){
    const userPosts = posts.filter(post => post.user_id === user.id)

    const display = userPosts.map((post) => {
        return (
            <div>
                <Post key={`account-${post.id}`} post={post} setPosts={setPosts} user={user}/>  
                <DeletePost key={`delete-${post.id}`} post={post} setPosts={setPosts}/>   
                <UpdatePost key={`update-${post.id}`} post={post} setPosts={setPosts}/>            
            </div>
        )
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

export default Account