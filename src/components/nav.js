import React , {useRef, useEffect, useState}  from "react";
import {Link} from 'react-router-dom';

const Nav = () => {
  const [offset, setOffset] = useState(0);
  const header = useRef();
  const navContent = useRef();
  const navAction = useRef();

  //to get value of scrool
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, []);

  //to change the nav if scroled
  useEffect(() => {
    if (offset > 10) {
      header.current.classList.add("bg-white");
      navAction.current.classList.remove("bg-white");
      navAction.current.classList.add("gradient");
      navAction.current.classList.remove("text-gray-800");
      navAction.current.classList.add("text-black");
      navAction.current.classList.add("bg-blue-500");
      header.current.classList.add("shadow");
      navContent.current.classList.remove("bg-gray-100");
      navContent.current.classList.add("bg-white");
    } else {
      header.current.classList.remove("bg-white");
      navAction.current.classList.remove("gradient");
      navAction.current.classList.remove("bg-blue-500");
      navAction.current.classList.add("bg-white");
      navAction.current.classList.remove("text-white");
      navAction.current.classList.add("text-gray-800");
      header.current.classList.remove("shadow");
      navContent.current.classList.remove("bg-white");
      navContent.current.classList.add("bg-gray-100");
    }
  },[offset])

  return (
    <nav ref={header} className="fixed w-full z-30 top-0 text-white">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
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
            id="nav-toggle"
            className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
          ref={navContent}
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a
                className="inline-block py-2 px-4 text-black font-bold no-underline"
                href="#"
              >
                Active
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                href="#"
              >
                link
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                href="#"
              >
                link
              </a>
            </li>
          </ul>
          <button
            ref={navAction}
            className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Action
          </button>
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
};

export default Nav;
