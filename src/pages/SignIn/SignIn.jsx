import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../redux/slices/amazonSlice";
const Signin = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");

  // Firebase Error
  // const [userEmailError, setUserEmailError] = useState("");
  // const [userPasswordError, setPasswordError] = useState("");

  // const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  // Loading State start here
  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
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
    } else if (!emailValidation(email)) {
      setErrEmail("Enter a valid email");
    }
    if (!password) {
      setErrPassword("Enter your password");
    }
    if (emailValidation(email) && password) {
      // setLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          dispatch(
            setUserInfo({
              _id: user.uid,
              userName: user.displayName,
              email: user.email,
            }),
          );
          // console.log(user);
          // setLoading(false);
          setSuccessMsg("Logged in successful");
          toast.success("Logged in successful", {
            position: "top-right",
            duration: 2000,
          });
          setTimeout(() => {
            navigate("/");
          }, 3000);
          // ...
        })
        .catch((error) => {
          // setLoading(false);
          const errorCode = error.code;
          if (errorCode.includes("auth/invalid-credential")) {
            toast.error("Enter valid email and password", {
              position: "top-right",
            });
          }
        });
      setEmail("");
      setPassword("");
    }
  };
  return (
    <div className="w-full">
      <div className="w-full bg-gray-100 pb-10">
        {successMsg ? (
          <div className="flex w-full items-center justify-center p-2">
            {successMsg}
          </div>
        ) : (
          <form className="mx-auto flex w-[350px] flex-col items-center">
            <div className="w-full border border-zinc-200 p-6">
              <h2 className="mb-4 font-titleFont text-3xl font-medium">
                Sign in
              </h2>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium">Email ID</p>
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
                  )}{" "}
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
                {/* {userEmailError && (
                  <p className="-mt-1.5 flex items-center gap-2 text-xs font-semibold tracking-wide text-red-600">
                    {userEmailError}
                  </p>
                )} */}
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
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default Signin;
