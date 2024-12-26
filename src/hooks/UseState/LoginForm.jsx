import "./index.css";
import { useState } from "react";

export const LoginForm = () => {
  const [loginData, setLoginData] = useState({
      username:"",
      password:""
  })

  const handleLoginData=(event)=>{
    const {name,value}=event.target
    setLoginData((prev)=>({...prev,[name]:value}))

  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(loginData);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Login Form</h1>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            required
            autoComplete="off"
            value={loginData.username}
            onChange={handleLoginData}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            autoComplete="off"
            value={loginData.password}
            onChange={handleLoginData}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};