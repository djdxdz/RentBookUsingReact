import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaFacebookF, FaUser, FaList } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const user = true;
  const username = "Shivansh Gupta";
  const [showSidebar, setShowSidebar] = useState();
  const [searchValue, setSearchValue] = useState();
  const { pathname } = useLocation();
  return (
    <div className="w-full bg-white">
      <div className="header-top bg-[#caddff] md-lg:hidden">
        <div className="w-[85%] lg:w-[90%] mx-auto">
          <div className="flex w-full justify-between items-center h-[50px] text-slate-500">
            <ul className="flex justify-start items-center gap-8 font-semibold text-black">
              <li className="flex relative justify-center items-center gap-2 text-sm after:absolute after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:-right-[16px]">
                <span>
                  <MdEmail />
                </span>
                <span>support@gmail.com</span>
              </li>

              <li className="flex relative justify-center items-center gap-2 text-sm ">
                <span>
                  <IoMdPhonePortrait />
                </span>
                <span>+(91) 760 300 5827</span>
              </li>
            </ul>
            <div>
              <div className="flex justify-center items-center gap-10">
                <div className="flex justify-center items-center gap-4 text-black ">
                  <a href="#">
                    <FaFacebookF />
                  </a>
                  <a href="#">
                    <FaTwitter />
                  </a>
                  <a href="#">
                    <FaLinkedin />
                  </a>
                  <a href="#">
                    <FaGithub />
                  </a>
                </div>
                <div className="flex group cursor-pointer text-slate-800 text-sm justify-center items-center gap-4 relative after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:-right-[16px] after:absolute before:absolute before:h-[18px] before:bg-[#afafaf] before:w-[1px] before:-left-[20px]">
                  {user ? (
                    <Link
                      className="flex cursor-pointer justify-center items-center gap-2 text-sm text-black font-semibold"
                      to="/dashboard"
                    >
                      <span>
                        <FaUser />
                      </span>
                      <span> {username} </span>
                    </Link>
                  ) : (
                    <div className="flex justify-center items-center gap-4 text-black">
                      <Link
                        className="flex cursor-pointer justify-center items-center gap-2 text-sm text-black font-semibold"
                        to="/login"
                      >
                        <span>
                          <FaUser />
                        </span>
                        <span> Login </span>
                      </Link>
                      <Link
                        className="flex cursor-pointer justify-center items-center gap-2 text-sm text-black font-semibold"
                        to="/register"
                      >
                        <span>
                          <FaUserPlus />
                        </span>
                        <span> Register </span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-white">
        <div className="w-[85%] lg:w-[90%] mx-auto">
          <div className="h-[80px] md-lg:h-[100px] flex justify-between items-center flex-wrap">
            <div className="md-lg:w-full w-3/12 md-lg:pt-4">
              <div className="flex justify-between items-center">
                <Link to="/">
                  <img src="http://localhost:3000/logo.png" alt="" />
                </Link>
                <div
                  className="justify-center items-center w-[30px] h-[30px] bg-white text-slate-600 border border-slate-600 rounded-sm cursor-pointer lg:hidden md-lg:flex xl:hidden hidden"
                  onClick={() => setShowSidebar(false)}
                >
                  <span>
                    <FaList />
                  </span>
                </div>
              </div>
            </div>
            <div className="md:lg:w-full w-6/12">
              <div className="flex justify-between md-lg:justify-center items-center flex-wrap pl-8">
                <ul className="flex justify-start items-start gap-8 text-sm font-bold uppercase md-lg:hidden">
                  <li>
                    <Link
                      className={`p-2 block ${
                        pathname === "/" ? "text-[#059473]" : "text-slate-600"
                      } `}
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/tutorials"
                      className={`p-2 block ${
                        pathname === "/tutorials"
                          ? "text-[#059473]"
                          : "text-slate-600"
                      } `}
                    >
                      Tutorials
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`p-2 block ${
                        pathname === "/blog"
                          ? "text-[#059473]"
                          : "text-slate-600"
                      } `}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`p-2 block ${
                        pathname === "/about"
                          ? "text-[#059473]"
                          : "text-slate-600"
                      } `}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`p-2 block ${
                        pathname === "/contact"
                          ? "text-[#059473]"
                          : "text-slate-600"
                      } `}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:lg:w-full w-3/12 md-lg:hidden">
              <div className="flex border h-[50px] items-center relative gap-6">
                <input
                  className="w-full relative bg-transparent text-slate-500 outline-0 px-3 h-full"
                  onChange={(e) => setSearchValue(e.target.value)}
                  type="text"
                  name=""
                  id=""
                  placeholder="What do you need"
                />
                <button className="bg-[#059473] right-0 absolute px-8 h-full font-semibold uppercase text-white">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md-lg:block">
        <div
          onClick={() => setShowSidebar(true)}
          className={`fixed duration-200 transition-all ${
            showSidebar ? "invisible" : "visible"
          } hidden md-lg:block w-screen h-screen bg-[rgba(0,0,0,0.5)] top-0 left-0 z-20 `}
        ></div>
        <div
          className={`w-[300px] z-[9999] transition-all duration-200 fixed ${
            showSidebar ? "-left-[300px]" : "left-0 top-0"
          } overflow-y-auto bg-white h-screen py-6 px-8 `}
        >
          <div className="flex justify-start flex-col gap-6">
            <Link to="/">
              <img src="http://localhost:3000/logo.png" alt="" />
            </Link>
            <div className="flex group cursor-pointer text-slate-800 text-sm justify-center items-center gap-4 relative">
              {user ? (
                <Link
                  className="flex cursor-pointer justify-center items-center gap-2 text-sm text-black font-semibold"
                  to="/dashboard"
                >
                  <span>
                    <FaUser />
                  </span>
                  <span> {username} </span>
                </Link>
              ) : (
                <div className="flex justify-center items-center gap-4 text-black">
                  <Link
                    className="flex cursor-pointer justify-center items-center gap-2 text-sm text-black font-semibold"
                    to="/login"
                  >
                    <span>
                      <FaUser />
                    </span>
                    <span> Login </span>
                  </Link>
                  <Link
                    className="flex cursor-pointer justify-center items-center gap-2 text-sm text-black font-semibold"
                    to="/register"
                  >
                    <span>
                      <FaUserPlus />
                    </span>
                    <span> Register </span>
                  </Link>
                </div>
              )}
            </div>
            <ul className="flex flex-col justify-start items-start text-sm font-bold uppercase">
              <li>
                <Link
                  className={`py-2 block ${
                    pathname === "/" ? "text-[#059473]" : "text-slate-600"
                  } `}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/shops"
                  className={`py-2 block ${
                    pathname === "/tutorials"
                      ? "text-[#059473]"
                      : "text-slate-600"
                  } `}
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  className={`py-2 block ${
                    pathname === "/blog" ? "text-[#059473]" : "text-slate-600"
                  } `}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className={`py-2 block ${
                    pathname === "/about" ? "text-[#059473]" : "text-slate-600"
                  } `}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className={`py-2 block ${
                    pathname === "/contact"
                      ? "text-[#059473]"
                      : "text-slate-600"
                  } `}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="flex justify-start items-center gap-4 text-black">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaGithub />
              </a>
            </div>

            <ul className="flex flex-col justify-start items-start gap-3 text-[#1c1c1c]">
              <li className="flex justify-start items-center gap-2 text-sm font-semibold">
                <span>
                  <IoMdPhonePortrait />
                </span>
                <span>+(91) 760 300 5827</span>
              </li>
            </ul>
            <ul className="flex flex-col justify-start items-start gap-3 text-[#1c1c1c]">
              <li className="flex justify-start items-center gap-2 text-sm font-semibold">
                <span>
                  <MdEmail />
                </span>
                <span>support@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
