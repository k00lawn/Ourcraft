/** @jsx jsx */
import React, { useEffect, useState } from "react";
import { css, jsx } from "@emotion/core";
import { Canvas } from "react-three-fiber";
import { Sky, Stars } from "drei";
import { Physics } from "use-cannon";
import { Ground } from "./components/Ground";
import Cubes from "./components/Cubes";
import { Player } from "./components/Player";
import { Hud } from "./components/Hud";
import { Crosshair } from "./components/Crosshair";
import { TouchControls } from "./components/TouchControls";
import { w3cwebsocket } from "websocket";
import ModalComponent from "./components/Modal";
import style from "./style";

// const client = new w3cwebsocket("ws://localhost:9090");
// const client = new w3cwebsocket("ws://192.168.1.13:9090");
const client = new w3cwebsocket("ws://192.168.1.42:9090");

function App() {
  const [{ x, y }] = useState({
    x: window.innerWidth / 2 - 10,
    y: window.innerHeight / 2 - 100,
  });

  let [clientId, setClientId] = useState("");
  let [cubesState, setCubesState] = useState([]);
  let [gameId, setGameId] = useState("");
  let [txtGameId, setTxtgameid] = useState("");
  const [showModal, setShowModal] = useState(true);
  const [hidePlayBtn, setHidePlayBtn] = useState(false);
  const [copiedId, setcopiedId] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [showTouchControls, setShowTouchControls] = useState(true);
  const [showMenu, setShowMenu] = useState(false)
  const [users, setUsers] = useState(1);
  const {
    menu,
    hideBtn,
    txtStyle,
    inputBoxStyle,
    centerAlign,
    ctaBtn,
  } = style;
  const menuItems = ["Resume", "Invite Players", "help", "quit"];

  const usersNum = {
    width: "30px",
    height: "30px",
    backgroundColor: "black",
    opacity: "0.7",
    color: "white",
    borderRadius: "10px",
    position: "absolute",
    right: "5px",
    top: "3px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  };

  useEffect(() => {
    client.onmessage = (message) => {
      const response = JSON.parse(message.data);
      if (response.method === "connect") {
        setClientId(response.clientId);
        console.log("Client id Set successfully " + response.clientId);
      }

      //create
      if (response.method === "create") {
        console.log("game successfully created with id " + response.game.id);
        setTxtgameid(response.game.id);
      }

      if (response.method === "update") {
        if (!response.game.state) return;

        const cubes = response.game.state.cubes;
        setCubesState((cubesState = cubes));
      }

      //join
      if (response.method === "join") {
        const game = response.game;
        setUsers(response.clients)
        console.log(game);
      }
    };
  }, []);

  const createNewGame = () => {
    console.log(" create new game btn is clicked");
    const payLoad = {
      method: "create",
      clientId: clientId,
    };

    client.send(JSON.stringify(payLoad));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const joinGame = () => {
    console.log(` joined game btn is clicke: ${txtGameId}`);
    setGameId(txtGameId);
    const payLoad = {
      method: "join",
      clientId: clientId,
      gameId: txtGameId,
    };

    setShowModal(false);
    client.send(JSON.stringify(payLoad));
  };

  useEffect(() => {
    console.log("txt id is ett", txtGameId);
    if (txtGameId) {
      joinGame();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [txtGameId]);

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

  const onPlay = (e) => {
    setHidePlayBtn(true);
  };
  const onClickCreateWorld = () => {
    createNewGame();
    setShowMenu(false)
  };

  const onClickJoinWorld = () => {
    joinGame();
    setShowMenu(false)
  };

  const handleValueChange = (e) => {
    setcopiedId(e.target.value);
    if (e.target.value.length == 36) {
      //length of gameID
      setTxtgameid(e.target.value);
    }
  };

  const handleKeyDown = (e) => {
    if (e.code === 'KeyM')
      setShowMenu(true)
  }


  document.addEventListener("keydown", handleKeyDown);

  const getMenu = () => {
    return (
      <>
        <div>
          <button
            css={[menu, ctaBtn]}
            style={{ marginRight: "10px", marginBottom: "10px" }}
            onClick={() => onClickCreateWorld()}
          >
            Create World
            </button>
          <input
            css={[inputBoxStyle, txtStyle, ctaBtn]}
            onChange={handleValueChange}
            placeholder="Enter  world  id "
            value={copiedId}
          />
          <button css={[menu, ctaBtn]} onClick={onClickJoinWorld} disabled={copiedId.length !== 36 ? true : false}>
            Join World
            </button>
        </div>
      </>
    )
  }

  const getMenuContent = () => {
    return (
      <div>
        {/* {menuItems.map((item) => {
          return (
            <div css={menu} onClick={closeModal}>{item}</div>
          )
        })} */}
        <button css={hidePlayBtn ? hideBtn : [menu, ctaBtn]} onClick={onPlay}>
          Play
        </button>
        {  hidePlayBtn  ? getMenu() : null}
       </div>
    );
  };

  return (
    <>
      <>
        <div>
          {txtGameId ? (
            <div css={centerAlign}>
              <div css={txtStyle}>World Id: {txtGameId}</div>
              <button
                css={[txtStyle, ctaBtn]}
                onClick={() => navigator.clipboard.writeText(txtGameId)}
              >
                Copy
              </button>
            </div>
          ) : null}
          <div className="user_number" style={usersNum}>
            {users}
          </div>
        </div>
      </>
      <>
        {txtGameId ? (
          <>
            <Crosshair x={x} y={y} />
            <Canvas shadowMap sRGB>
              <Stars
                radius={100}
                count={100}
                factor={8}
                saturation={1}
                // depth={10}
                fade
              />
              <Sky sunPosition={[1000, 200, 100]} />
              <ambientLight intensity={0.25} />
              <pointLight
                castShadow
                intensity={0.7}
                position={[100, 100, 100]}
              />
              <Hud position={[0, 1.1, -2]} isMobile={isMobile} />
              <Physics gravity={[0, -30, 0]}>
                <Ground position={[0, 0.5, 0]} onBlockPlaced={onBlockPlaced} />
                <Player position={[0, 3, 10]} isMobile={isMobile} />
                <Cubes onBlockPlaced={onBlockPlaced} cubesState={cubesState} />
              </Physics>
            </Canvas>
          </>
        ) : null}

        <ModalComponent
          open={showModal}
          onClose={showModal}
          headerText="menu"
          centerheader
          closeButton
          children={getMenuContent()}
        />
        <ModalComponent
          open={showMenu}
          onClose={showMenu}
          headerText="menu"
          centerheader
          closeButton
          children={getMenu()}
        />
      </>
      {showTouchControls ? (
        <TouchControls isMob={(val) => setIsMobile(val)} />
      ) : null}
    </>
  );
}

export default App;
