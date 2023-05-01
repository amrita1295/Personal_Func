import React, { useContext } from "react";
import { useState } from "react";
import menu from "../../assets/Menu.png";
import { Link } from "react-router-dom";
import "./PersonalNavbar.css";
import rishiSignature from "../../assets/rishi-nav.png";
import logo from "../../assets/logo.png";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

// import { FaHome } from "react-icons/fa";
// import { ChevronDownIcon } from '@heroicons/react/20/solid'

const PersonalNavbar = () => {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const menuItems = (
  //   <>
  //     <li className="mb-2 md:mb-0 md:pt-0 lg:mb-0 lg:pt-0 pt-2">
  //       <Link to="/">HOME</Link>
  //     </li>
  //     <li className="mb-2 md:mb-0 lg:mb-0">
  //       <Link to="/myStory">MyStory</Link>
  //     </li>
  //     <li className="mb-2 md:mb-0 lg:mb-0">
  //       <Link to="/myProjects">MyProjects </Link>
  //     </li>
  //     <li className="mb-2 md:mb-0 lg:mb-0">
  //       <Link to="/myBlogs">MyBlogs </Link>
  //     </li>
  //     <li className="mb-2 md:mb-0 lg:mb-0">
  //       <Link to="/contact">CONTACT </Link>
  //     </li>
  //   </>
  // );
  // let [open, setOpen] = useState(false);

  return (
    <div className="border-b ">
      <div className="navbar bg-[#FBF8F0] px-6">
        <div className="navbar-start">
          <Link to={"/home"}>
            <img src={logo} alt="" className="w-[70px]" />
          </Link>
        </div>
        <div className="navbar-center"></div>
        <div className="navbar-end">
          <div className="w-32 text-right z-50">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md  bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  <img src={menu} alt="" />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-44 origin-top-right divide-y divide-gray-100  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <Link to={"/home"}>
                          <button
                            className={`${
                              active
                                ? "bg-gray-100 text-black "
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm `}
                          >
                            Home
                          </button>
                        </Link>
                      )}
                    </Menu.Item>

                    <hr className="border-gray-200" />

                    <Menu.Item>
                      {({ active }) => (
                        <Link to={"/myStory"}>
                          <button
                            className={`${
                              active
                                ? "bg-gray-100 text-black "
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm `}
                          >
                            My Story
                          </button>
                        </Link>
                      )}
                    </Menu.Item>
                  </div>

                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link to={"/myProjects"}>
                          <button
                            className={`${
                              active
                                ? "bg-gray-100 text-black "
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm `}
                          >
                            My Projects
                          </button>
                        </Link>
                      )}
                    </Menu.Item>

                    <hr className="border-gray-200" />

                    <Menu.Item>
                      {({ active }) => (
                        <Link to={"/myBlogs"}>
                          <button
                            className={`${
                              active
                                ? "bg-gray-100 text-black "
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm `}
                          >
                            My Blogs
                          </button>
                        </Link>
                      )}
                    </Menu.Item>
                  </div>

                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link to={"/publicSpeaking"}>
                          <button
                            className={`${
                              active
                                ? "bg-gray-100 text-black "
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm `}
                          >
                            Public Speaking
                          </button>
                        </Link>
                      )}
                    </Menu.Item>
                  </div>

                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link to={"/contact"}>
                          <button
                            className={`${
                              active
                                ? "bg-gray-100 text-black "
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm `}
                          >
                            Contact Me
                          </button>
                        </Link>
                      )}
                    </Menu.Item>
                  </div>

                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link to={"/media"}>
                          <button
                            className={`${
                              active
                                ? "bg-gray-100 text-black "
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm `}
                          >
                            Media
                          </button>
                        </Link>
                      )}
                    </Menu.Item>
                  </div>

                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link to={"/contact"}>
                          <button
                            className={`${
                              active
                                ? "bg-gray-100 text-black "
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm `}
                          >
                            Xtraliving
                          </button>
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>

    // <div className="shadow-md w-full fixed top-0 z-50">
    //   <div className="md:flex sm:gap-5 items-center justify-between bg-[#FBF8F0] lg:py-0 md:px-10 px-7">
    //     <Link to="/">
    //       <img src={rishiSignature} alt="" className="pt-5 w-[95px]" />
    //     </Link>

    //     <div
    //       onClick={() => setOpen(!open)}
    //       className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
    //     >
    //       <ion-icon name="filter-outline"></ion-icon>
    //     </div>

    //     <ul
    //       className={`md:flex md:items-center md:pb-0 pb-12 gap-4 lg:gap-10 absolute md:static bg-[#FBF8F0] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
    //         open ? "top-20 " : "top-[-495px]"
    //       }`}
    //     >
    //       {menuItems}
    //     </ul>
    //   </div>
    // </div>

    // <div>

    //   <header className="text-gray-900 body-font shadow-sm bg-[#FBF8F0]">
    //     <div className=" mx-auto flex flex-wrap lg:py-0 md:py-0 lg:px-12 md:px-12  px-5 flex-row items-center ">
    //       <Link
    //         to="/"
    //         className="flex title-font font-medium items-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-500 mb-4 md:mb-0"
    //       >
    //         <span className="lg:mt-0 md:mt-0 mt-3 text-2xl font-bold ">
    //           <img src={logo} alt="" className="lg:py-5 md:py-5 pt-2 w-[60px]" />
    //         </span>
    //       </Link>

    //       <nav className="ml-auto flex flex-wrap items-center text-base justify-center">
    //         <>
    //           <div className="relative inline-block ">
    //             <button
    //               onClick={() => setIsDropdownOpen(!isDropdownOpen)}
    //               className="relative z-10 block p-2 text-gray-700 bg-[#FBF8F0] border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40  focus:ring-blue-300  focus:ring  focus:outline-none"
    //             >
    //               <img src={menu} alt="" />
    //             </button>

    //             {isDropdownOpen && (
    //               <div className="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl ">
    //                 <Link
    //                   to="/home"
    //                   className="flex items-center px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-100 "
    //                 >
    //                   <span className="mx-1">Home</span>
    //                 </Link>

    //                 <hr className="border-gray-200" />

    //                 <div className="flex items-center cursor-pointer p-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-100 ">
    //                   <Link to={"/myStory"}>
    //                     <span className="mx-1">My Story</span>
    //                   </Link>
    //                 </div>

    //                 <hr className="border-gray-200" />

    //                 <div className="flex items-center cursor-pointer p-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-100 ">
    //                   <Link to={"/myProjects"}>
    //                     <span className="mx-1">My Projects</span>
    //                   </Link>
    //                 </div>

    //                 <hr className="border-gray-200" />

    //                 <div className="flex items-center cursor-pointer p-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-100 ">
    //                   <Link to={"/myBlogs"}>
    //                     <span className="mx-1">My Blogs</span>
    //                   </Link>
    //                 </div>

    //                 <hr className="border-gray-200" />

    //                 <div className="flex items-center cursor-pointer p-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-100 ">
    //                   <Link to={"/publicSpeaking"}>
    //                     <span className="mx-1">Public Speaking</span>
    //                   </Link>
    //                 </div>

    //                 <hr className="border-gray-200" />

    //                 <div className="flex items-center cursor-pointer p-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-100 ">
    //                   <Link to={"/contact"}>
    //                     <span className="mx-1">Contact Me</span>
    //                   </Link>
    //                 </div>

    //                 <hr className="border-gray-200" />

    //                 <div className="flex items-center cursor-pointer p-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-100 ">
    //                   <Link to={"/contact"}>
    //                     <span className="mx-1">Xtraliving</span>
    //                   </Link>
    //                 </div>
    //               </div>
    //             )}
    //           </div>
    //         </>
    //       </nav>
    //     </div>
    //   </header>
    // </div>
  );
};

export default PersonalNavbar;
