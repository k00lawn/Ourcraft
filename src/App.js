import React, { useEffect, useState } from "react";
import { Canvas } from "react-three-fiber";
import { Sky, Stars } from "drei";
import { Physics } from "use-cannon";
import { Ground } from "./components/Ground";
import Cubes from "./components/Cubes";
import { Player } from "./components/Player";
import { Hud } from "./components/Hud";
import { Crosshair } from "./components/Crosshair";
import { w3cwebsocket } from "websocket";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const client = new w3cwebsocket("ws://127.0.0.7:9090");

function App() {
  const handle = useFullScreenHandle();
  const [{ x, y }] = useState({
    x: window.innerWidth / 2 - 10,
    y: window.innerHeight / 2 - 100,
  });

  let [clientId, setClientId] = useState("");
  let [cubesState, setCubesState] = useState([]);
  let [gameId, setGameId] = useState("");
  let [txtGameId, setTxtgameid] = useState("");

  useEffect(() => {
    client.onmessage = (message) => {
      const response = JSON.parse(message.data);
      if (response.method === "connect") {
        setClientId(response.clientId);
        console.log("Client id Set successfully " + clientId);
      }

      //create
      if (response.method === "create") {
        setGameId(response.game.id);
        console.log("game successfully created with id " + response.game.id);
      }

      if (response.method === "update") {
        if (!response.game.state) return;

        const cubes = response.game.state.cubes;
        setCubesState((cubesState = cubes));
      }

      //join
      if (response.method === "join") {
        const game = response.game;
        console.log(game);
      }
    };
  }, []);

  const createNewGame = () => {
    console.log("neww game btn is clicked");
    const payLoad = {
      method: "create",
      clientId: clientId,
    };

    client.send(JSON.stringify(payLoad));
  };

  const joinGame = () => {
    console.log(`this is the xtgameid : ${txtGameId}`);
    setGameId(txtGameId);
    const payLoad = {
      method: "join",
      clientId: clientId,
      gameId: txtGameId,
    };

    client.send(JSON.stringify(payLoad));
  };

  // Call this function when block is placed
  const onBlockPlaced = (mode, cubePos, cubeType, id) => {
    const payLoad = {
      method: "play",
      clientId: clientId,
      gameId: gameId,
      mode: mode,
      id: id,
      cube: {
        cubePos: cubePos,
        cubeType: cubeType,
      },
    };
    client.send(JSON.stringify(payLoad));
  };

  return (
    <>
      <>
        <div>
          <h1>Ball Game</h1>

          <div style={{ display: "flex" }}>
            <button id="btnCreate" onClick={createNewGame}>
              New Game
            </button>
            <button id="btnJoin" onClick={joinGame}>
              Join Game
            </button>
            <input
              type="text"
              id="txtGameId"
              onChange={(e) => setTxtgameid(e.target.value)}
            />
            <div id="divPlayers" style={{ border: "2px solid red" }}>
              {gameId}
            </div>
            <div id="divBoard">
              <button onClick={handle.enter}>Enter fullscreen</button>
            </div>
          </div>
          <script src="../server/index.js"></script>
        </div>
      </>
      <>
        <FullScreen handle={handle}>
          <Crosshair x={x} y={y} />
          <Canvas shadowMap sRGB>
            <Stars color="black" />
            <Sky sunPosition={[100, 20, 100]} />
            <ambientLight intensity={0.25} />
            <pointLight castShadow intensity={0.7} position={[100, 100, 100]} />
            <Hud position={[0, 1.1, -2]} />
            <Physics gravity={[0, -30, 0]}>
              <Ground position={[0, 0.5, 0]} onBlockPlaced={onBlockPlaced} />
              <Player position={[0, 3, 10]} isMobile={false} />
              <Cubes onBlockPlaced={onBlockPlaced} cubesState={cubesState} />
            </Physics>
          </Canvas>
        </FullScreen>
      </>
    </>
  );
}

export default App;
