import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [offset, setOffset] = useState(0);
  const [targetHumberger, setTargetHumberger] = useState([]);
  const header = useRef();
  const navContent = useRef();
  const navToggle = useRef();
  const navAction = useRef([]);

  
  useEffect(() => {
    //to get value of scrool
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
    //to get the id of icon and out icon humberger
    setTargetHumberger([document.getElementById("outIcon"), document.getElementById("menuIcon") ])
  }, []);

  //to change the nav if scroled
  useEffect(() => {
    if (offset > 10) {
      header.current.classList.add("bg-white");
      header.current.classList.add("shadow");
      navContent.current.classList.remove("bg-gray-100");
      navContent.current.classList.add("bg-white");
    } else {
      header.current.classList.remove("bg-white");
      header.current.classList.remove("shadow");
      navContent.current.classList.remove("bg-white");
      navContent.current.classList.add("bg-gray-100");
    }
  }, [offset]);

  //to hide the modal when clicked outside the modal
 useEffect(() => {
    window.onclick = function (event) {
      if (event.target === targetHumberger[0] || event.target === targetHumberger[1] ) {
        if (navContent.current.classList.contains("hidden")) {
          navContent.current.classList.add("hidden");
        } else {
          navContent.current.classList.remove("hidden");
        }
      } else {
        navContent.current.classList.add("hidden");
      }
    };
  }, [targetHumberger]);
 

  //to show or hide togle button
  const togleNavHandler = (e) => {
        if (navContent.current.classList.contains("hidden")) {
          navContent.current.classList.remove("hidden");
        } else {
          navContent.current.classList.add("hidden");
        }
  };

  

  return (
    <nav ref={header}  className="fixed w-full z-30 top-0 text-white">
      <div  className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <Link
            className="toggleColour text-black no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            to="/"
          >
            Ayoujian
          </Link>
        </div>
        <div className="block lg:hidden pr-4">
          <button
            ref={navToggle} 
            onClick={togleNavHandler}
            className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              id="outIcon"
            >
              <title>Menu</title>
              <path id="menuIcon" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
          ref={navContent}
        >
          <ul className="list-reset lg:flex justify-center flex-1 items-center">
            <li className="mr-3">
              <Link
                className="inline-block py-2 px-4 text-gray-700 font-bold no-underline"
                to="/guru"
              >
                Guru
              </Link>
            </li>
            <li className="mr-3">
              <Link
                className="inline-block py-2 px-4 text-gray-700 font-bold no-underline"
                to="/pricing"
              >
                Pricing
              </Link>
            </li>
            <li className="mr-3">
              <Link
                className="inline-block py-2 px-4 text-gray-700 font-bold no-underline"
                to="/bantuan"
              >
                Bantuan
              </Link>
            </li>
          </ul>
          <button
            className="mx-auto lg:ml-3 lg:mx-0 border border-gray-500 bg-white text-gray-800 font-bold rounded-full mt-3 lg:mt-0 py-2 px-6 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Daftar
          </button>
          <button
            className="mx-auto lg:ml-3 lg:mx-0 border border-gray-500 bg-white text-gray-800 font-bold rounded-full mt-3 lg:mt-0 py-2 px-6 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Masuk
          </button>
        </div>
      </div>
      <hr className="border-b border-gray-300 opacity-30 my-0 py-0" />
    </nav>
  );
};

export default Nav;
