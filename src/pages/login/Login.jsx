import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <form className="loginForm">
            <label className="loginText">Login Here</label>
            <label>Username</label>
            <input type="text" placeholder="Enter your email..." />
            <label>Password</label>
            <input type="password" placeholder="Enter your password..."/>
            <button className="loginBtn">Login</button>

        </form>
        <button className="loginRegisterBtn">Register</button>

    </div>
  )
}
