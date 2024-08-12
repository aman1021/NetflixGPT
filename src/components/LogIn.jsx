import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/vaildate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const LogIn = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState(null);

  const navigate = useNavigate();
  const dispatch  = useDispatch();


  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  

  const handleButtonClick = () => {
    //Validate the form data.
    // console.log(email.current.value, password.current.value);
    const msg = checkValidData(email.current.value, password.current.value);
    setErrMessage(msg);

    if (msg) {
      return;
    }

    //sign in or sign up the user.
    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({
                uid: uid,
                email:email,
                displayName: displayName,
                photoURL: photoURL
              }))
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrMessage(error.message)
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("user signed in", user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg"
          alt="bg-logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-12 w-3/12 text-white bg-black bg-opacity-75 absolute mt-56 mx-auto right-0 left-0 rounded-lg"
      >
        <h1 className="text-white font-bold mb-4 p-2 text-4xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {isSignInForm ? (
          <></>
        ) : (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 m-2 rounded-sm w-full bg-gray-800 bg-opacity-35 text-white border border-slate-50"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-3 m-2 rounded-sm w-full bg-gray-800 bg-opacity-35 text-white border border-slate-50"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 m-2 rounded-sm w-full bg-gray-800 bg-opacity-35 text-white border border-slate-50"
        />
        <p className="text-[#E50914] p-2 font-semibold">{errMessage}</p>
        <button
          onClick={handleButtonClick}
          className="text-white font-semibold bg-[#E50914] hover:bg-red-700 p-2 m-2 mt-6 w-full rounded-sm"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-6 p-3 flex font-semibold text-gray-300 cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already a user? Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default LogIn;
