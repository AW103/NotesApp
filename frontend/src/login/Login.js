import { useState } from "react";
import "./login.css"
import { Link, Navigate } from "react-router-dom";


const Login = ({login, authorized}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const onUsernameInputChange = (e) => {
      setUsername(e.target.value);
    }

    const onPasswordInputChange = (e) => {
      setPassword(e.target.value);
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        login(username,password);
    }

      return (
          <main className="form-signin"> 
          {authorized ? <Navigate to="/"/> :
    <form onSubmit={onFormSubmit}>
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
  <div className="form-floating">
          <input type="text" className="form-control" id="floatingInput" placeholder="username123" value={username} onChange={onUsernameInputChange}/>
          <label htmlFor="floatingInput">Username</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="password" value={password} onChange={onPasswordInputChange}/>
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="registerLink">
          <p>New user? <Link to="/register">Click to Register</Link></p> 
        </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    </form>
}
  </main>
      )
}

export default Login;