import { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const { login, error } = useContext(UserContext);

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      await login(name, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto'>
      <form onSubmit={loginHandler}>
        <div className='card-body'>
          {/* Email field */}
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              type='text'
              placeholder='Enter user name'
              required
              className='input input-bordered'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Password field */}
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Password</span>
            </label>
            <input
              type='password'
              placeholder='password'
              className='input input-bordered'
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <label className='label'>
              <a href='/' className='label-text-alt link link-hover'>
                Forgot password?
              </a>
            </label> */}
          </div>

          {error && <p className=' text-red-400'>{error}</p>}

          {/* Login button */}
          <div className='form-control mt-6'>
            <button type='submit' className='btn btn-primary'>
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
