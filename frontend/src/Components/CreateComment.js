import { useState } from "react"

function CreateComment({post, setPosts}){
    const [sendCom, setSendCom] = useState({
        comment: ""
    })

    const handleChange = (e) => {
        setSendCom((currentUser) => (
            {...currentUser, [e.target.name]: e.target.value}
        ))
    }

    const handleComment = (e) => {
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
            debugger
            setPosts(current => {
                const postId = current.findIndex(ele => ele.id === post.id)
                return [...current.slice(0, postId), "", ...current.slice(postId + 1)]
            })
        })

        setSendCom({
            comment: ""
        })
    }


    return (
        <div className="comBox">
            <form className='input' onSubmit={(e) => handleComment(e, post)}> 
                <input className='commentInput' name="comment" type="comment" placeholder='Add a comment' onChange={handleChange} value={sendCom.comment}/>
                <button className='inputButton' type="submit"> send </button>
            </form>
        </div>
 
    )
}

export default CreateComment