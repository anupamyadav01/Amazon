import { useEffect } from "react";
// import { updateUser } from "../../redux/slices/amazonSlice";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../../config/firebase";
const User = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
    });
  }, []);

  return <div>User</div>;
};

export default User;
