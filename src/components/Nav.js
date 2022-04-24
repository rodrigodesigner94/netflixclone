import React from 'react';
import './Nav.css';
import { useEffect } from 'react';

function Nav() {
    const [show, setShow] = React.useState(false);

useEffect(() => {
  window.addEventListener("scroll", () => {
      setShow(window.scrollY > 100);
  });

  return () => {
    // window.removeEventListener("scroll");
  };
}, []);


  return (
    <div className={`nav-container ${show && "nav-container-black"}`}>
        <img
         className="nav-logo"
         src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
         alt="Netflix"></img>
        <img
         className="nav-avatar"
         src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
         alt="Avatar User"></img>
    </div>
  )
}

export default Nav;