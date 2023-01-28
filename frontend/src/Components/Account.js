// import DeletePost from "./DeletePost"
import Post from "./Post"

function Account({posts, user, setPosts}){
    const userPosts = posts.filter(post => post.user_id === user.id)

    const display = userPosts.map((post) => {
        return (
            <div key={post.id}>
                <Post key={`post-${post.id}`} post={post} setPosts={setPosts} user={user}/>
                {/* <DeletePost key={`delete-${post.id}`} post={post} setPosts={setPosts}/> */}
            </div>
        )
    })
    
    return(
        
    <div className="posts">
        <div className="header">{user.username}'s Posts</div>
        <div className="dis">
            {display}
        </div>
    </div>
    
    )
}

export default Account