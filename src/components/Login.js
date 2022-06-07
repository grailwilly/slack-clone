import { useState } from "react";
import { userLogin } from "../api/api-login.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = (e) => {
    setEmail(e.target.value)
  }

  const changePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = (e) => {
    e.preventDefault();
    userLogin(email, password)
    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <h2>User Log in</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="email" value={email} onChange={changeEmail} />
        <input type="password" placeholder="password" value={password} onChange={changePassword} />
        <button type="submit">Sign in</button>
      </form>
    </div>
  )
}

export default Login;