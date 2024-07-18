import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
// import { getAuth } from "firebase/auth";

const Register = () => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  // Error Message start
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errCPassword, setErrCPassword] = useState("");
  // Loading State start

  // Handle funtion start
  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  const handleCPassword = (e) => {
    setCPassword(e.target.value);
    setErrCPassword("");
  };

  // Email validation start
  // const emailValidation = (email) => {
  //   return String(email)
  //     .toLowerCase()
  //     .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  // };

  // Submit button start
  const handleRegistration = (e) => {
    e.preventDefault();
    // if (!clientName) {
    //   setErrClientName("Enter your name");
    // }
    // if (!email) {
    //   setErrEmail("Enter your email");
    // } else {
    //   if (!emailValidation(email)) {
    //     setErrEmail("Enter a valid email");
    //   }
    // }
    // if (!password) {
    //   setErrPassword("Enter your password");
    // } else {
    //   if (password.length < 6) {
    //     setErrPassword("Passwords must be at least 6 characters");
    //   }
    // }
    // if (!cPassword) {
    //   setErrCPassword("Confirm your password");
    // } else {
    //   if (cPassword !== password) {
    //     setErrCPassword("Password not matched");
    //   }
    // }
  };
  return (
    <div className="w-full">
      <div className="w-full bg-gray-100 pb-10">
        <form className="mx-auto flex w-[370px] flex-col items-center">
          <div className="w-full border border-zinc-200 p-6">
            <h2 className="mb-4 font-titleFont text-3xl font-medium">
              Create Account
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Your name</p>
                <input
                  onChange={handleName}
                  value={clientName}
                  type="text"
                  className="w-full rounded-sm border border-zinc-400 px-2 py-1 text-base outline-none duration-100 focus-within:border-[#e77600] focus-within:shadow-amazonInput"
                />
                {errClientName && (
                  <p className="-mt-1.5 flex items-center gap-2 text-xs font-semibold tracking-wide text-red-600">
                    <span className="font-titleFont text-base font-extrabold italic">
                      !
                    </span>
                    {errClientName}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Your email</p>
                <input
                  onChange={handleEmail}
                  value={email}
                  type="email"
                  className="w-full rounded-sm border border-zinc-400 px-2 py-1 text-base lowercase outline-none duration-100 focus-within:border-[#e77600] focus-within:shadow-amazonInput"
                />
                {errEmail && (
                  <p className="-mt-1.5 flex items-center gap-2 text-xs font-semibold tracking-wide text-red-600">
                    <span className="font-titleFont text-base font-extrabold italic">
                      !
                    </span>
                    {errEmail}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Password</p>
                <input
                  value={password}
                  onChange={handlePassword}
                  type="password"
                  className="w-full rounded-sm border border-zinc-400 px-2 py-1 text-base outline-none duration-100 focus-within:border-[#e77600] focus-within:shadow-amazonInput"
                />
                {errPassword && (
                  <p className="-mt-1.5 flex items-center gap-2 text-xs font-semibold tracking-wide text-red-600">
                    <span className="font-titleFont text-base font-extrabold italic">
                      !
                    </span>
                    {errPassword}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Re-enter Password</p>
                <input
                  onChange={handleCPassword}
                  value={cPassword}
                  type="password"
                  className="w-full rounded-sm border border-zinc-400 px-2 py-1 text-base outline-none duration-100 focus-within:border-[#e77600] focus-within:shadow-amazonInput"
                />
                {errCPassword && (
                  <p className="-mt-1.5 flex items-center gap-2 text-xs font-semibold tracking-wide text-red-600">
                    <span className="font-titleFont text-base font-extrabold italic">
                      !
                    </span>
                    {errCPassword}
                  </p>
                )}
                <p className="text-xs text-gray-600">
                  Passwords must be at least 6 characters.
                </p>
              </div>
              <button
                onClick={handleRegistration}
                className="w-full rounded-sm border border-zinc-400 bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] py-1.5 text-sm font-normal hover:bg-gradient-to-b active:border-yellow-800 active:shadow-amazonInput"
              >
                Continue
              </button>
            </div>
            <p className="mt-4 text-xs leading-4 text-black">
              By Continuing, you agree to Amazon&apos;s{" "}
              <span className="text-blue-600">Conditions of Use </span>and{" "}
              <span className="text-blue-600">Privace Notice.</span>
            </p>
            <div>
              <p className="text-xs text-black">
                Already have an account?{" "}
                <Link to="/signin">
                  <span className="cursor-pointer text-xs text-blue-600 underline-offset-1 duration-100 hover:text-orange-600 hover:underline">
                    Sign in{" "}
                    <span>
                      <ArrowRightIcon />
                    </span>
                  </span>
                </Link>
              </p>
              <p className="-mt-2 text-xs text-black">
                Buying for work?{" "}
                <span className="cursor-pointer text-xs text-blue-600 underline-offset-1 duration-100 hover:text-orange-600 hover:underline">
                  Create a free business account
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
