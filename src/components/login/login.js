import {useNavigate}  from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {userAction} from '../../redux/userAuth';
import './login.css';

function Login() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const handleSubmit = (e)=>{
      e.preventDefault();
      dispatch(userAction.logIn());
      navigate('/home/users')
  }
  return (
    <div className='login-container'>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="username" className="form-label">Login</label>
            <input type="email" className="form-control" name='username' id="username" placeholder='Enter login' aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" name='password' placeholder='Enter password' id="password"/>
        </div>
        <div className="btn-container">
        <button type="submit" className="btn log-in-btn">Log in</button>
        </div>
        </form>
    </div>
  )
}

export default Login