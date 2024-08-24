import React, { useState } from "react";

const SignInSignUp = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
<<<<<<< HEAD
    <div className="flex items-center justify-center min-h-screen">
=======
    <div className="flex items-center justify-center min-h-screen ">
>>>>>>> b6154cefaf4912cad66176c41f5863c159ab3484
      <div className="bg-black bg-opacity-70 p-8 rounded-2xl shadow-md w-96">
        <h2 className="text-3xl font-semibold text-white text-center mb-6">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>
        <form>
          <input
            type="text"
            placeholder="Email or mobile number"
            className="w-full px-4 py-2 mb-4 border border-gray-700 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-gray-800"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 mb-4 border border-gray-700 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-gray-800"
          />
          {!isSignIn && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 mb-4 border border-gray-700 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          )}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
        </form>
        <div className="flex justify-between items-center mt-4">
          {isSignIn && (
            <>
              <label className="flex items-center text-gray-400">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-gray-400 hover:underline">
                Forgot password?
              </a>
            </>
          )}
        </div>
        <div className="text-center mt-6">
          <p className="text-gray-400">
            {isSignIn ? "New User?" : "Already have an account?"}{" "}
            <span
              onClick={toggleForm}
              className="text-white hover:underline cursor-pointer"
            >
              {isSignIn ? "Sign up now." : "Sign in now."}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;
