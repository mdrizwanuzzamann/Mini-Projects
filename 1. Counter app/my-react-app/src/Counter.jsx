import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex items-center justify-center flex-col m-0">
        <h1 className="text-5xl my-5 py-10 underline">Counter App</h1>
        <div className="m-4 p-2">
          <span className="text-5xl">{count}</span>
        </div>

        <div>
          <button
            className="m-3 p-5 w-2xs text-5xl rounded-2xl bg-green-500 border cursor-pointer hover:bg-green-400"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
          <button
            className="m-3 p-5 w-2xs text-5xl rounded-2xl bg-red-500 border cursor-pointer hover:bg-red-400"
            onClick={() => setCount(count - 1)}
          >
            -
          </button>
          <button
            className="m-3 p-5 w-2xs text-5xl rounded-2xl bg-gray-200 border cursor-pointer hover:bg-gray-100"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
