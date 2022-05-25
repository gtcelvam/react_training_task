import { useState } from 'react';
import ReactDOM  from 'react-dom'
import './model.css'

function Model(props) {
    const [data,setData] = useState({
        login : null,
        role : null,
        status : null,
        password:null,
        c_password:null,
        data:null
    })
 const handleData = (e)=>{
        let form = {}
        let name = e.target.name;
        let value = e.target.value;
        form[name] = value;
        setData({...data,...form})
        console.log(data)
  }
  return ReactDOM.createPortal (
      <div className="backdrop">
        <div className='model-container'>
            <div className="model-head-container">
                <div className="model-title-container">
                    <h1>{props.details.title}</h1>
                </div>
                <div className="model-close-container" onClick={props.modelClose}>x</div>
            </div>
            <div className="model-body-container">
                <form onChange={handleData}>
                    <div className="login-input-container form-item-container">
                        <label htmlFor="login">Login</label>
                        <input type='text' name='login' placeholder='Login' id='login'/>
                        {data.login === '' && <p className='input-alert'>No Field Should Be Empty</p>}
                    </div>
                    <div className="role-status-container">
                        <div className="role-container form-item-container">
                            <label htmlFor="role">Role</label>
                            <select name="role" id="role">
                                <option value="admin">Admin</option>
                                <option value="client">Client</option>
                            </select>
                            {data.role === '' && <p className='input-alert'>No Field Should Be Empty</p>}
                        </div>
                        <div className="status-container form-item-container">
                            <label htmlFor="status">Status</label>
                            <select name="status" id="status">
                                <option value="Active">Active</option>
                                <option value="Log In">Log In</option>
                            </select>
                            {data.status === '' && <p className='input-alert'>No Field Should Be Empty</p>}
                        </div>
                    </div>
                    <div className="password-container">
                        <div className="p-container form-item-container">
                            <label htmlFor="password">Password</label>
                            <input type='text' name='password' placeholder='Password' id='password'/>
                            {data.password === '' && <p className='input-alert'>No Field Should Be Empty</p>}
                        </div>
                        <div className="cp-container form-item-container">
                            <label htmlFor="c-password">Confirm password</label>
                            <input type='text' name='c_password' placeholder='Confirm Password' id='c-password'/>
                            {data.c_password === '' && <p className='input-alert'>No Field Should Be Empty</p>}
                        </div>
                    </div>
                    <div className="data-container form-item-container">
                        <label htmlFor="data">Data (json)</label>
                        <textarea name='data' placeholder='data' id='data'></textarea>
                        {data.data === '' && <p className='input-alert'>No Field Should Be Empty</p>}
                    </div>
                </form>
            </div>
            <div className="model-footer-container">
                <div className="cancel-btn-container">
                    <button className='btn cancel-btn' onClick={props.modelClose}>Cancel</button>
                </div>
                <div className="save-btn-container">
                    <button className='btn btn-success save-btn'>Save</button>
                </div>
            </div>
        </div>
      </div>,document.getElementById('model-root')
  )
}

export default Model