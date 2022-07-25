import { render } from "react-dom";
import React, { useRef, useState, useEffect } from "react";
import { useSprings, animated } from "react-spring";
import "./styles.css";

import Phaser from "phaser";

import { MyGame } from "./game";

import { calculateGameSize } from "@/utils/calculateDimensions";

const { width, height, multiplier } = calculateGameSize();

function Viewpager() {
  const [gameReady, setGameReady] = useState(false);

  useEffect(() => {
    const game = new Phaser.Game({
      type: Phaser.AUTO,
      title: "some-game-title",
      parent: "gameBox",
      orientation: Phaser.Scale.LANDSCAPE,
      localStorageName: "some-game-title",
      width,
      height,
      autoRound: true,
      pixelArt: true,
      scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH,
        mode: Phaser.Scale.ENVELOP
      },
      scene: MyGame,
      //scene: [BootScene, MainMenuScene, GameScene, GameOverScene],
      physics: {
        default: "arcade"
      },
      backgroundColor: "#000000"
    });
  }, []);

  return (
    <>
      <div
        id={"gameBox"}
        className={"gameContainer"}
        style={gameReady ? { visibility: "visible" } : { visibility: "hidden" }}
      />
      {/* This is the initial game loading*/}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          visibility: gameReady ? "hidden" : "visible"
        }}
      >
        <animated.div>Test</animated.div>
      </div>
      {/* container for the game */}
    </>
  );
}

render(<Viewpager />, document.getElementById("root"));
