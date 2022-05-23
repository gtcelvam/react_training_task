import { useEffect } from 'react';
import Header from './components/header/header';
import Login from './components/login/login';
import Home from './components/home/home';
import UserDetail from './UI/userDetail/userDetail';
import {useSelector} from 'react-redux';
import {Routes,Route,Navigate,useNavigate} from 'react-router-dom';
import './App.css';

function App() {
  const user = useSelector(state=>state.user.isLoggedIn);
  const navigate = useNavigate('/')
  /* useEffect(()=>{
    user ? navigate('/home/users') : navigate('/');
  },[]) */
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home/users' element={!user ? <Navigate to='/'/> : <Home/>}/>
        <Route path='/model' element={<UserDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
