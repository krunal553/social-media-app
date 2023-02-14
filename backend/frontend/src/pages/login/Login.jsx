import './Login.css';
import {Link} from 'react-router-dom'

// import { useContext } from 'react';
// import { AuthContext } from '../../context/authContext';


const Login = () => {

  // const { login } = useContext(AuthContext);


  return (
    <div className='login'>

      <div className="card">

        <div className="left">
          <h1>Hello World</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, eaque?</p>
          <span>Don't you have an account?</span>
          <Link to="/register">
          <button className="registerBtn">Register</button>
          </Link>
        </div>

        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input type="text" name="loginusername" id="username" placeholder='Usernname' />
            <input type="password" name="loginpassword" id="password" placeholder='Password' />
            <Link to = "/">
              <button className="loginBtn" >Login</button>
            </Link>
          </form>
        </div>

      </div>

    </div>
  )
}

export default Login
