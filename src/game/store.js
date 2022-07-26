import create from "zustand";

import config from "@/game/config";

const useStore = create(() => {
  return {
    gameStarted: false,
    //max health
    health: config.maxHealth
  };
});

export default useStore;
