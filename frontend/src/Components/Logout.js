import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

function Logout({user, setUser, setPage}){
  const navigate = useNavigate()

  useEffect(() => {
    fetch("http://127.0.0.1:9393/logout", {
      method: 'DELETE',
    })
    .then(res => {
      console.log(res)
      setUser(null)
      window.localStorage.setItem("user", JSON.stringify(null))
      navigate('/login')
    })
  }, []);

  return (

      <div className="form">
        <p>Logged Out</p>
      </div>
  )
}

export default Logout 