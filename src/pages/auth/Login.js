import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";


const Login = () => {
  const LoginBg = { url: require("../../assets/Login/LoginBg.jpg") };
  return (
    <>
      <div
        className="flex justify-center items-center font-KulimPark w-full h-[100vh] bg-no-repeat bg-cover text-white bg-center"
        style={{ backgroundImage: `url(${LoginBg.url})` }}
      >
        <div className="py-5 bg-slate-400/30 w-[380px] border-white border rounded-3xl animate-up">
          <h2 className="text-center font-bold text-3xl mb-10">Login</h2>
          <form action="">
            <div className="relative w-[80%] mx-[10%] h-16 my-4">
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Your Email!"
                className="w-full h-8 p-2 my-2 outline-none rounded-md text-black"
              />
            </div>
            <div className="md:relative w-[80%] mx-[10%] h-16 my-4">
              <label htmlFor="password" className="font-semibold">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="w-full h-8 p-2 my-2 outline-none rounded-md text-black"
              />
            </div>

            <div className="md:relative w-[80%] mx-[10%] my-10 h-8 group">
              <div className="absolute w-full h-full md:bg-gradient-to-r inset-0 from-blue-900 via-blue-300 to-blue-900 blur opacity-50 group-hover:opacity-100 duration-500"></div>
              <button
                className="md:relative w-full h-full bg-white rounded-md font-semibold text-black 
             duration-500 hover:bg-blue-500 hover:text-white"
              >
                Login
              </button>
            </div>
            <p className="text-center">--- or ---</p>
            <div className="md:relative w-[80%] mx-[10%] my-6 h-8 group">
              <div className="absolute w-full h-full md:bg-gradient-to-r inset-0 from-blue-900 via-blue-300 to-blue-900 blur opacity-50 group-hover:opacity-100 duration-500"></div>
              <button
                className="md:relative w-full h-full bg-white rounded-md font-semibold text-black 
             duration-500 hover:bg-blue-500 hover:text-white flex items-center justify-center"
              >
                <FaGoogle /> <span className="mx-2">Login With Google</span>
              </button>
            </div>
            <p className="text-center">You Dont't Have An Account? <Link to='/register' className="hover:text-blue-500 duration-500">Register</Link></p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
