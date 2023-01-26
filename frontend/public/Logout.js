import { useEffect } from "react"

function Logout({user, setUser, setPage}){
  // fetch("http://127.0.0.1:9393/logout", {
  //   method: 'DELETE',
  // })
  // .then(res => console.log(res))
  // .then()

  setUser(null)
  window.localStorage.setItem("user", JSON.stringify(null))

  console.log()
  // useEffect(() => {
  // fetch("http://localhost:9393/logout")
  // .then(resp => resp.json())
  // .then(data => setPosts(data))//setPost(data))
  // }, []);

  return (
      <div className="form">
        <p>Logged Out</p>
        <p>Have a nice day</p>
        <a onClick={()=>{setPage("/login")}} href="login">Login</a>
      </div>
  )
}

export default Logout 