import Model from '../Model/model';
import { useSelector,useDispatch } from 'react-redux';
import { modelAction } from '../../redux/modelSlice';
import './userDetail.css';

function UserDetail() {
  const model = useSelector(state=>state.model.userModel);
  const dispatch = useDispatch();
  const modelOpen = ()=>{
        dispatch(modelAction.modelOpen());
  }
  const modelClose = ()=>{
      dispatch(modelAction.modelClose());
  }
  const details = {
      title : 'Edit User'
  }
  return (
    <div className='user-detail-container'>
        <div className="user-detail-head"><p>User</p></div>
        <div className="user-detail-body">
            <div className="login-detail">
                <p>Login:</p>
            </div>
            <div className="role-status-detail">
                <div className="role-detail">
                <p>Role:</p>
                </div>
                <div className="status-detail">
                <p>Status:</p>
                </div>
            </div>
            <div className="data-detail">
                <p>Data (json):</p>
            </div>
        </div>
        <div className="user-detail-foot">
            <button className='btn edit-btn' onClick={modelOpen}>Edit</button>
        </div>
        {model && <Model modelClose={modelClose} details={details}/>}
    </div>
  )
}

export default UserDetail