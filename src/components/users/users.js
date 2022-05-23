import {useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { modelAction } from '../../redux/modelSlice';
import Model from '../../UI/Model/model';

function Users() {
  const userModel = useSelector(state=>state.model.userModel);
  const dispatch = useDispatch();
  const modelOpen = ()=>{
    dispatch(modelAction.modelOpen());
  }
  const modelClose = ()=>{
    dispatch(modelAction.modelClose())
  }
  const modelDetails = {
    title : "Create New User"
  }
  return (
     <>
     <div className="user-table-container">
        <table className="user-table">
        <thead>
        <tr>
            <th>Login</th>
            <th>Role</th>
            <th>Status</th>
            <th>Data</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Thselvan</td>
            <td>Admin</td>
            <td>Active</td>
            <td>""</td>
            <td><button className='btn details-btn'>Details</button><button className='btn btn-danger'>Delete</button></td>
        </tr>
        <tr>
            <td>Thselvan</td>
            <td>Admin</td>
            <td>Active</td>
            <td>""</td>
            <td><button className='btn details-btn'>Details</button><button className='btn btn-danger'>Delete</button></td>
        </tr>
        <tr>
            <td>Thselvan</td>
            <td>Admin</td>
            <td>Active</td>
            <td>""</td>
            <td><button className='btn details-btn'>Details</button><button className='btn btn-danger'>Delete</button></td>
        </tr>
        </tbody>
    </table>
  </div>
  <div className="add-user-container">
    <button onClick={modelOpen} className="btn btn-success add-user-btn">Add New User</button>
  </div>
  {userModel && <Model modelClose={modelClose} details={modelDetails}/>}
  </>
  )
}

export default Users