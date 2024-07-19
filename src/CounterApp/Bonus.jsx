import { useSelector } from "react-redux";

const Bonus = () => {
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.bonus);

  return (
    <div className="">
      <h3 className="text-2xl">Bonnus Components</h3>
      <p>Amout: {amount}</p>
      <p>Total Point: {points}</p>
      <button className="border border-slate-500 bg-zinc-400 px-3 py-1 shadow-sm">
        Increment +
      </button>
    </div>
  );
};

export default Bonus;
