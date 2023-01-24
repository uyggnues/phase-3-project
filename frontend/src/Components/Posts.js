import Post from "./Post"

function Posts({posts}){
    const display = posts.map((post) => {
        return <Post post={post}/>
    })

    return(
        <div>
            {display}
        </div>
    )
}

export default Posts