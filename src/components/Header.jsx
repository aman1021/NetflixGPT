import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";


const Header = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store?.user)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        // An error happened.
        navigate('/error')

      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({
          uid: uid,
          email:email,
          displayName: displayName,
          photoURL: photoURL
        }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return ()=> unsubscribe();
  }, []);

  return (
    <div className=" flex items-center justify-between z-10 w-full absolute px-12 py-2 bg-gradient-to-b from-black">
      <img
        className="w-48 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && <div className="flex gap-2">
        <img
          className="w-10"
          src= {user?.photoURL}
          alt="user_icon"
        />
        <button
          onClick={handleSignOut}
          className="p-2 bg-[#E50914] hover:bg-red-700 text-white font-semibold rounded-sm"
        >
          Sign out
        </button>
      </div>}
    </div>
  );
};

export default Header;
