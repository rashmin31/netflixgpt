import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { addUser, removeUser } from "../utils/userSlice"
import { LOGO, USER_AVATAR } from "../utils/constants"

const Header = () => {
  const navigate = useNavigate();
  
  const dispatch = useDispatch();

  const user = useSelector(store => {
    return store.user
  })
  
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error")
        //An Error happened
      })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user) {
        const {uid, email, displayName,} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName}));
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
      }
    });
    return () => unsubscribe();
  },[])

  return (
    <div className="w-full absolute px-8 py-2 bg-gradient-to-b from-black z-[1] flex justify-between">
      <img 
        src={LOGO}
        alt="Netflix Logo" 
        className="w-48"
      />
      {user && <div className="flex p-2">
        <img 
          src={USER_AVATAR}
          alt="usericon"
          className="w-12 h-12"
        />
        <button 
          className="font-bold text-white px-2"
          onClick={handleSignOut}
        >
          (Sign Out)
        </button>
      </div>}
    </div>
  )
}

export default Header