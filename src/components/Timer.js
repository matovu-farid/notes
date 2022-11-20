import React from "react";
import { defaultTimeInterval } from "../constants";
import useTimeIntervalStore from "../state/time";

const Timer = () => {
  const { timeInterval, resetTimer, running } = useTimeIntervalStore(
    (state) => state
  );
  return (
    <div className="w-full flex justify-between px-2">
      <p className="p-2">{timeInterval}</p>
      <button
        type="button"
        disabled={!running && timeInterval === defaultTimeInterval}
        onClick={resetTimer}
        className=" transition-opacity  disabled:opacity-30 inline-flex items-center rounded border border-transparent bg-indigo-100 px-2.5 py-1.5 text-xs font-medium text-indigo-700 active:hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Clear
      </button>
    </div>
  );
};

export default Timer;
