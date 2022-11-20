import React from "react";
import useTimeIntervalStore from "../state/time";

const Timer = () => {
  const timeInterval = useTimeIntervalStore((state) => state.timeInterval);
  const resetTimer = useTimeIntervalStore((state) => state.resetTimer);
  return (
    <div className="w-full flex justify-between px-2">
      <p className="p-2">{timeInterval}</p>
      <button
        type="button"
        onClick={resetTimer}
        className="inline-flex items-center rounded border border-transparent bg-indigo-100 px-2.5 py-1.5 text-xs font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Clear
      </button>
    </div>
  );
};

export default Timer;
