import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import UserContext from '../context/UserContext';

function Register() {
  const [isAdmin, setIsAdmin] = useState(0);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showError, setShowError] = useState('');

  const { registerUser, error } = useContext(UserContext);
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const registerUserHandler = async (e) => {
    e.preventDefault();

    // Check confirmation password
    // If no match set error and clear error after 4s
    if (password !== confirmPassword) {
      setShowError('Password do not match!');
      setInterval(() => {
        setShowError('');
      }, 4000);
      return;
    } else {
      setShowError('');
    }

    // register new user
    try {
      await registerUser(isAdmin, name, password);
    } catch (err) {
      console.log(err);
    }

    // After user successfuly register redirect to '/dashboard'
    if (user) {
      navigate('/dashboard');
    }
  };

  return (
    <div className='card flex-shrink-0 w-full max-w-sm md:max-w-xl shadow-2xl bg-base-100 mx-auto'>
      <form onSubmit={registerUserHandler}>
        <div className='card-body md:justify-evenly'>
          {/* Name field */}
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Name</span>
            </label>
            <input
              type='text'
              placeholder='name'
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
              placeholder='Password'
              required
              className='input input-bordered'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Confirm password field */}
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Confirm Password</span>
            </label>
            <input
              type='password'
              placeholder='Confirm password'
              required
              className='input input-bordered'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {/* Display errors if email already registered */}
          {/* Handled by UserContext */}
          {error && <p className=' text-red-400'>{error}</p>}

          {/* Display errors for form filds requirements and validation */}
          {showError && <p className=' text-red-400'>{showError}</p>}

          <div className='form-control mt-[36px]'>
            <button type='submit' className='btn btn-primary'>
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
