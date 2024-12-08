import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const language = useRef();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector((store) => {
    return store.user;
  });

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
        //An Error happened
      });
  };

  const handleGptSearchClick = () => {
    //Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = () => {
    dispatch(changeLanguage(language.current.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="w-full absolute px-8 py-2 bg-gradient-to-b from-black z-[1] flex justify-between">
      <img src={LOGO} alt="Netflix Logo" className="w-48" />
      {user && (
        <div className="flex p-2">
          {showGptSearch && (
            <select
              className="py-2 px-4 mx-4 my-2 min-w-10 bg-gray-700 bg-opacity-60 text-white"
              onChange={handleLanguageChange}
              ref={language}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-4 my-2 min-w-10 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Browse" : "GPT Search"}
          </button>
          <img src={USER_AVATAR} alt="usericon" className="w-12 h-12" />
          <button className="font-bold text-white px-2" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
