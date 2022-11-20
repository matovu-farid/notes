import React, { useState } from "react";
import { FaStopwatch } from "react-icons/fa";
import useTimeIntervalStore from "../../state/time";

const Watch = ({ noteId }) => {
  const { startTimer, stopTimer, running } = useTimeIntervalStore(
    (state) => state
  );
  const onClick = () => {
    if (running) {
      stopTimer(noteId);
    } else {
      startTimer(noteId);
    }
  };

  return (
    <button
      onClick={onClick}
      className={
        "text-gray-800 shadow-lg hover:scale-110 transition-transform gap-2 m-2 inline-flex items-center rounded-md   px-3 py-2  font-medium leading-4  "
      }
    >
      <FaStopwatch />
    </button>
  );
};

export default Watch;
