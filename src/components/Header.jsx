import { signOut } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector(store => {
    return store.userReducer
  })
  console.log("user-2: ", user)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/")
      })
      .catch((error) => {
        navigate("/error")
        //An Error happened
      })
  }
  return (
    <div className="w-full absolute px-8 py-2 bg-gradient-to-b from-black z-[1] flex justify-between">
      <img 
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
        alt="Netflix Logo" 
        className="w-48"
      />
      {user && <div className="flex p-2">
        <img 
          src="https://occ-0-2087-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4"
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