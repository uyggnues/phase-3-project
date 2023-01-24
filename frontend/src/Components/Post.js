import CreateComment from './CreateComment'
import Comments from './Comments'

function Post({post}){

    // "id": 3,
    // "caption": "Goodness comes to those who wait.",
    // "date": "2014-02-10T00:00:00.000Z",
    // "likes": 61,
    // "image": "https://loremflickr.com/300/300",
    // "user_id": 4,
    // "created_at": "2023-01-23T16:42:24.670Z",
    // "updated_at": "2023-01-23T16:42:24.670Z",

    return(
        <div className="post">
            <img className="image" src={post.image} alt="post"/>
            <p>{post.caption}</p>
            <p>Likes: {post.likes}</p>
            <p>Posted: {post.date}</p>
            <h2>Comments:</h2>
            <Comments comments={post.comments} post={post}/>
        </div>
    )
}

export default Post