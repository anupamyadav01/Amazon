import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  // Firebase Error

  // Loading State start here

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (!email) {
      setErrEmail("Enter your email");
    }
    if (!password) {
      setErrPassword("Enter your password");
    }
    if (email && password) {
      console.log(email, password);
      setEmail("");
      setPassword("");
    }
  };
  return (
    <div className="w-full">
      <div className="w-full bg-gray-100 pb-10">
        <form className="mx-auto flex w-[350px] flex-col items-center">
          <div className="w-full border border-zinc-200 p-6">
            <h2 className="mb-4 font-titleFont text-3xl font-medium">
              Sign in
            </h2>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">
                  Email or mobile phone number
                </p>
                <input
                  onChange={handleEmail}
                  value={email}
                  className="w-full rounded-sm border border-zinc-400 px-2 py-1 text-base lowercase outline-none duration-100 focus-within:border-[#e77600] focus-within:shadow-amazonInput"
                  type="email"
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
                  onChange={handlePassword}
                  value={password}
                  className="w-full rounded-sm border border-zinc-400 px-2 py-1 text-base lowercase outline-none duration-100 focus-within:border-[#e77600] focus-within:shadow-amazonInput"
                  type="password"
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
              <button
                onClick={handleLogin}
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
            <p className="group mt-4 cursor-pointer text-xs text-gray-600">
              <ArrowRightIcon />{" "}
              <span className="text-blue-600 underline-offset-1 group-hover:text-orange-700 group-hover:underline">
                Need help?
              </span>
            </p>
          </div>
          <p className="mt-4 flex w-full items-center text-xs text-gray-600">
            <span className="inline-flex h-[1px] w-1/3 bg-zinc-400"></span>
            <span className="w-1/3 text-center">New to Amazon?</span>
            <span className="inline-flex h-[1px] w-1/3 bg-zinc-400"></span>
          </p>
          <Link className="w-full" to="/register">
            <button className="mt-4 w-full rounded-sm border border-zinc-400 bg-gradient-to-t from-slate-200 to-slate-100 py-1.5 text-sm font-normal hover:bg-gradient-to-b active:border-yellow-800 active:shadow-amazonInput">
              Create your Amazon account
            </button>
          </Link>
        </form>
      </div>
      {/* <div className="flex w-full flex-col items-center justify-center gap-4 bg-gradient-to-t from-white via-white to-zinc-200 py-10">
        <div className="flex items-center gap-6">
          <p className="cursor-pointer text-xs text-blue-600 underline-offset-1 duration-100 hover:text-orange-600 hover:underline">
            Conditions of Use
          </p>
          <p className="cursor-pointer text-xs text-blue-600 underline-offset-1 duration-100 hover:text-orange-600 hover:underline">
            Privacy Notice
          </p>
          <p className="cursor-pointer text-xs text-blue-600 underline-offset-1 duration-100 hover:text-orange-600 hover:underline">
            Privacy Notice
          </p>
        </div>
        <p className="text-xs text-gray-600">
          © 1996-2023, ReactBd.com, Inc. or its affiliates
        </p>
      </div> */}
    </div>
  );
};

export default Signin;
