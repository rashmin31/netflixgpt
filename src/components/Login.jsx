import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const[isSignInForm, setIsSignInForm] = useState(true)
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ce449112-3294-449a-b8d3-c4e1fdd7cff5/web/IN-en-20241202-TRIFECTA-perspective_0acfb303-6291-4ad1-806f-dda785f6295a_large.jpg"
          alt="Bg Image"
        />
      </div>
      <form className="w-4/12 absolute bg-black mt-36 p-12 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl">
          {isSignInForm ? "Sign In" : "Sign up"}
        </h1>
        {!isSignInForm && (<input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-700 rounded-md bg-opacity-50"
        />)}
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-md bg-opacity-50"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-md bg-opacity-50"
        />
        <button 
          className="p-4 my-6 bg-red-700 w-full rounded-md"
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
