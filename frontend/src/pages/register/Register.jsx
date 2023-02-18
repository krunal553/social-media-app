import './Register.css'
import {Link} from 'react-router-dom'

const Register = () => {
  return (
    <div className='register'>
      <div className="reg_card">

        <div className="left_reg">
          <h1>College Socio</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, eaque?</p>
          <span>Do you have an account?</span>
          <Link to="/login">
          <button className="loginBtn">Login</button>
          </Link>
          
        </div>

        <div className="right">

          <h1>Register</h1>
          <form action="">
            <input type="text" name="registerusername" id="username" placeholder='Create Usernname' />
            <input type="email" name="email" id="email" placeholder='Email'/>
            <input type="password" name="password" id="password1" placeholder='Create Password' />
            <input type="password" name="password" id="password2" placeholder='Enter Password Again' />
            <Link>
              <button className="loginBtn">Register</button>
            </Link>
          </form>

        </div>

      </div>
    </div>
  )
}

export default Register
