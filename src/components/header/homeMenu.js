import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { userAction } from '../../redux/userAuth';
import {useNavigate} from 'react-router-dom';
function HomeMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = ()=>{  
    dispatch(userAction.logOut());
    navigate('/');
  }
  return (
    <div className="head-container">
      <div className="nav-left">
        <div className="menu-container">
          <Link to='/home/users'>
            <p className='active'>Users</p>
          </Link>
          <Link to='/home/network'>
            <p>Network</p>
          </Link>
        </div>
      </div>
      <div className="nav-right">
        <h1 onClick={handleLogOut}>Log Out</h1>
      </div>
    </div>
  )
}

export default HomeMenu