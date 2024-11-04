import React from 'react'



const Login:React.FC = () => {
  return (
    <main>
      <div className="form-container">
        <h2 className="reg-header">Login</h2>
        <form className="register-form">
          <div className="form-body">
            <label htmlFor="email">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="form-body">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="register-btn">
            Login
          </button>
        </form>
      </div>
    </main>
  )
}

export default Login