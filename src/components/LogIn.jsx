import React, { useState } from "react";
import Header from "./Header";

const LogIn = () => {

  const [isSignInForm, setIsSignInForm] = useState(true)

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg"
          alt="bg-logo"
        />
      </div>
      <form className="p-12 w-3/12 text-white bg-black bg-opacity-75 absolute mt-56 mx-auto right-0 left-0 rounded-lg">
        <h1 className="text-white font-bold mb-4 p-2 text-4xl">{isSignInForm? 'Sign In' : 'Sign Up'}</h1>
        {isSignInForm ? <></> : <input
          type="text"
          placeholder="Full Name"
          className="p-3 m-2 rounded-sm w-full bg-gray-800 bg-opacity-35 text-white border border-slate-50"
        />}
        <input
          type="email"
          placeholder="Email Address"
          className="p-3 m-2 rounded-sm w-full bg-gray-800 bg-opacity-35 text-white border border-slate-50"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 m-2 rounded-sm w-full bg-gray-800 bg-opacity-35 text-white border border-slate-50"
        />
        <button className="text-white font-semibold bg-[#E50914] hover:bg-red-700 p-2 m-2 mt-6 w-full rounded-sm">
        {isSignInForm? 'Sign In' : 'Sign Up'}
        </button>
        <p className="py-6 flex font-semibold text-gray-300 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm? "New to Netflix? Sign up now." : "Already a user? Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default LogIn;
