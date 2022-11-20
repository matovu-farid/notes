import create from "zustand";
import { immer } from "zustand/middleware/immer";
import { getInterval } from "../Library/time";

const useTimeIntervalStore = create(
  immer((set, get) => ({
    startTime: 0,
    currentTime: 0,
    timeInterval: "",
    timer: null,
    noteId: null,
    running: false,
    resetTimer: () => {
      set((state) => {
        state.startTime = 0;
        state.currentTime = 0;
        state.timeInterval = "";
        clearInterval(state.timer);
        state.timer = null;
        state.noteId = null;
        state.running = false;
      });
    },

    startTimer: (noteId) => {
      const stoppedTime = get().currentTime;
      const timer = setInterval(() => {
        set((state) => {
          state.currentTime = Date.now();
          state.timeInterval = getInterval(state.startTime, state.currentTime);
        });
      }, 1000);
      set((state) => {
        state.timer = timer;
        state.running = true;
        if (noteId !== state.noteId) {
          state.noteId = noteId;
          state.startTime = Date.now();
          state.timeInterval = "";
        } else {
          const delay = Date.now() - stoppedTime;
          state.startTime += delay;
        }
      });
    },
    stopTimer: (noteId) => {
      set((state) => {
        clearInterval(state.timer);
        state.running = false;
        state.timer = null;
      });

      if (noteId !== get().noteId) get().startTimer(noteId);
    },
  }))
);
export default useTimeIntervalStore;
