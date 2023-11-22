import { useEffect, useRef } from 'react';
import React from 'react';
import logo from '../../assests/images/logo.png';
import { NavLink, Link } from 'react-router-dom';
import userImg from '../../assests/images/avatar-icon.png';
import { BiMenu } from 'react-icons/bi';

const navLinks = [
  {
    path: '/Home',
    display: 'Home',
  },
  {
    path: '/Doctors',
    display: 'Find a Doctors',
  },
  {
    path: '/Services',
    display: 'Services',
  },
  {
    path: '/Contact',
    display: 'Contact',
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };      

  // ..................useEffect.................
  useEffect(() => {
    handleStickyHeader();

    return () => window.removeEventListener('scroll', handleStickyHeader);
  }, []);

const toggleMenu =(  )=>menuRef.current.classList.toggle('show__menu')





  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container" >
        <div className="flex items-center justify-between" >
          {/* ..............logo................. */}
          <div>
            <img src={logo} alt="" />
          </div>
          {/* ...............menu................. */}
          <div className="navigation" ref={menuRef}onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? 'text-primaryColor text-[20px] leading-5 font-[300]'
                        : 'text-textColor text-[24px] leading-7 font-[200] hover:text-primaryColor'
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* ..............................right nav.......... */}
          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link to="/">
                <figure className="w-[35] h-[35] rounded-full cursor-pointer">
                  <img src={userImg} className="w-full rounded-full" alt=""  />
                </figure>
              </Link>
            </div>
            <Link to="/Login">
              <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center">
                Login
              </button>
            </Link>
            <span className="md:hidden" onClick={ toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
