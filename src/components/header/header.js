import HomeMenu from './homeMenu';
import {useSelector} from 'react-redux';
import './header.css';

function Header() {
  const user = useSelector(state=>state.user.isLoggedIn);
  return (
  <nav className="navbar navbar-light bg-dark">
    <div className="navbar-head">
    <h1>Aequalis</h1>
    </div>
    {user && <HomeMenu/>}
  </nav>
  )
}

export default Header