import { useState } from "react"
import {signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase"
import "./login.scss"
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = (e)=>{
    e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/");
          console.log(user);
        })
        .catch((error) => {
          setError(true);
        });

  }
  return (
    <div className="login">
          <form action="" onSubmit={handleLogin}>
            <input type="email"  placeholder="Email.." onChange={(e)=> setEmail(e.target.value)}/>
            <input type="password"  placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
             <button type="submit">Login</button>
             {error && <span>Wrong email or password!</span>}
          </form>
    </div>
  )
}

export default Login 