"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../features/counter/counterSlice";
import { useState } from "react";

export default function Counter() {
  // 使用useSelector获取store中的count值
  const count = useSelector((state: RootState) => state.counter.value);
  // 使用useDispatch获取dispatch函数
  const dispatch = useDispatch();
  // 使用useState设置incrementAmount的初始值为2
  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">计数器示例</h2>

      <div className="flex items-center space-x-4 mb-6">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => dispatch(decrement(1))}
        >
          -
        </button>

        <span className="text-2xl font-bold">{count}</span>

        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => dispatch(increment(1))}
        >
          +
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <input
          className="border border-gray-300 dark:border-gray-700 rounded px-3 py-2 w-20 text-center"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
          type="number"
        />

        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          添加数量
        </button>
      </div>
    </div>
  );
}
