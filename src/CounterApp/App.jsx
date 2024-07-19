import { useSelector } from "react-redux";
import Account from "./Account";
import Bonus from "./Bonus";

const App = () => {
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.bonus);
  //   console.log(amount, points);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-5 border border-zinc-300 bg-slate-700 text-center text-white">
      <h2 className="text-3xl">App Components</h2>
      <div>
        <p>Current Amount : {amount}</p>
        <p>Total bonus : {points}</p>
      </div>
      <Account />
      <Bonus />
    </div>
  );
};
export default App;
