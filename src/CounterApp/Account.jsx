import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./slices/accountSlice";

const Account = () => {
  const [value, setValue] = useState(0);
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.bonus);

  const dispatch = useDispatch();

  return (
    <div className="">
      <h3 className="text-2xl">Account Componenet</h3>
      <p>Ammount: {amount}</p>
      <p>Points: {points}</p>

      <div className="flex gap-3">
        <button
          className="border border-slate-500 bg-zinc-400 px-3 py-1 shadow-sm"
          onClick={() => dispatch(increment())}
        >
          Increment +
        </button>
        <button
          className="border border-slate-500 bg-zinc-400 px-3 py-1 shadow-sm"
          onClick={() => dispatch(decrement())}
        >
          Desrement -
        </button>
        <input
          type="text"
          className="p-1"
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="border border-slate-500 bg-zinc-400 px-3 py-1 shadow-sm"
          onClick={() => dispatch(incrementByAmount(value))}
        >
          Increment by {} +
        </button>
      </div>
    </div>
  );
};

export default Account;
