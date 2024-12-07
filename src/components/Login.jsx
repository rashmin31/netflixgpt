import { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null)
  const fullName = useRef(null)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    const message = validateData(email.current.value, password.current.value);
    console.log("message: ", message)
    setErrorMessage(message)
    if(message) return;

    if(!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value,
          })
          .then(() => {
            const {uid, email, displayName} = auth
            dispatch(addUser({uid: uid, email: email, displayName: displayName}));
            navigate("/browse")
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + " - " + errorMessage)
          });
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage)
        });
    } else {
      //sign in
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          navigate("/browse")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage)
        });
    }
    
  }
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null)
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ce449112-3294-449a-b8d3-c4e1fdd7cff5/web/IN-en-20241202-TRIFECTA-perspective_0acfb303-6291-4ad1-806f-dda785f6295a_large.jpg"
          alt="Bg Image"
          srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/ce449112-3294-449a-b8d3-c4e1fdd7cff5/web/IN-en-20241202-TRIFECTA-perspective_0acfb303-6291-4ad1-806f-dda785f6295a_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/ce449112-3294-449a-b8d3-c4e1fdd7cff5/web/IN-en-20241202-TRIFECTA-perspective_0acfb303-6291-4ad1-806f-dda785f6295a_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/ce449112-3294-449a-b8d3-c4e1fdd7cff5/web/IN-en-20241202-TRIFECTA-perspective_0acfb303-6291-4ad1-806f-dda785f6295a_large.jpg 1800w"
        />
      </div>
      <form className="w-4/12 absolute bg-black mt-36 p-12 mx-auto right-0 left-0 text-white bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}>
        <h1 className="font-bold text-3xl">
          {isSignInForm ? "Sign In" : "Sign up"}
        </h1>
        {!isSignInForm && (<input
          ref={fullName}
          type="text"
          name="fullName"
          id="fullName"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-700 rounded-md bg-opacity-50"
          required
        />)}
        <input
          ref={email}
          type="text"
          name="email"
          id="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-md bg-opacity-50"
        />
        <input
          ref={password}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-md bg-opacity-50"
        />
        {errorMessage && <p className="text-red-700 font-bold text-lg">{errorMessage}</p>}
        <button 
          className="p-4 my-6 bg-red-700 w-full rounded-md"
          onClickCapture={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign up"}
        </button>
        <p className="p-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign up Now" : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
