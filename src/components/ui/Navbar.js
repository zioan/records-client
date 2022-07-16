import { Link, NavLink } from 'react-router-dom';
import { VscGraphLeft } from 'react-icons/vsc';
import { useContext, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

import AuthContext from '../../context/AuthContext';
import UserContext from '../../context/UserContext';

function Navbar() {
  const [togglerNav, setTogglerNav] = useState(false);

  const { user } = useContext(AuthContext);
  const { logoutUser } = useContext(UserContext);

  const clickHandler = () => {
    setTogglerNav(!togglerNav);
  };

  return (
    <nav className=' h-auto md:h-24 p-2 bg-accent-focus  mx-auto flex justify-between md:items-center'>
      <Link to='/'>
        <VscGraphLeft className=' text-6xl text-zinc-800' />
      </Link>
      <div
        className={
          togglerNav ? 'flex flex-col gap-4 md:inline' : 'hidden md:inline'
        }
      >
        <NavLink className='btn nav-link' onClick={clickHandler} to='/'>
          Home
        </NavLink>
        <NavLink
          className='btn nav-link'
          onClick={clickHandler}
          to='/authentication'
        >
          Login
        </NavLink>
        {user && (
          <NavLink className='btn nav-link' onClick={logoutUser} to='/'>
            Log out
          </NavLink>
        )}
        <NavLink className='btn nav-link' onClick={clickHandler} to='/about'>
          About
        </NavLink>
        <NavLink className='btn nav-link' onClick={clickHandler} to='/contact'>
          Contact
        </NavLink>
      </div>
      <button
        className=' inline md:hidden self-start btn '
        onClick={clickHandler}
      >
        {togglerNav ? <AiOutlineClose /> : <FaBars />}
      </button>
    </nav>
  );
}

export default Navbar;
