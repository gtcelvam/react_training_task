import ReactDOM  from 'react-dom'
import './model.css'

function Model(props) {
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
                <form>
                    <div className="login-input-container form-item-container">
                        <label htmlFor="login">Login</label>
                        <input type='text' placeholder='Login' id='login'/>
                    </div>
                    <div className="role-status-container">
                        <div className="role-container form-item-container">
                            <label htmlFor="role">Role</label>
                            <select name="role" id="role">
                                <option value="admin">Admin</option>
                                <option value="client">Client</option>
                            </select>
                        </div>
                        <div className="status-container form-item-container">
                            <label htmlFor="status">Status</label>
                            <select name="status" id="status">
                                <option value="Active">Active</option>
                                <option value="Log In">Log In</option>
                            </select>
                        </div>
                    </div>
                    <div className="password-container">
                        <div className="p-container form-item-container">
                            <label htmlFor="password">Password</label>
                            <input type='text' placeholder='Password' id='password'/>
                        </div>
                        <div className="cp-container form-item-container">
                            <label htmlFor="c-password">Confirm password</label>
                            <input type='text' placeholder='Confirm Password' id='c-password'/>
                        </div>
                    </div>
                    <div className="data-container form-item-container">
                        <label htmlFor="data">Data (json)</label>
                        <textarea placeholder='data' id='data'></textarea>
                    </div>
                </form>
            </div>
            <div className="model-footer-container">
                <div className="cancel-btn-container">
                    <button className='btn cancel-btn'>Cancel</button>
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