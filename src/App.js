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
import Close from "./images/close.svg";

// const client = new w3cwebsocket("ws://localhost:9090");
const client = new w3cwebsocket("ws://192.168.0.102:9090");
const copy = require('clipboard-copy')

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
  const [showTouchControls, setShowTouchControls] = useState(true);
  const [showMenu, setShowMenu] = useState(false)
  const {
    menu,
    hideBtn,
    txtStyle,
    inputBoxStyle,
    centerAlign,
    container,  copyBtnContainer,
    ctaBtn, copyBtn, iconContainer, close
  } = style;
  const gameIdList=[]

  var storedNames = JSON.parse(localStorage.getItem("gameIDs"));
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
        gameIdList.push(response.game.id)
        localStorage.setItem("gameIDs", JSON.stringify(gameIdList));

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
  };

  const onClickJoinWorld = () => {
    setShowMenu(false)
    joinGame();
  };

  const handleValueChange = (e) => {
    setcopiedId(e.target.value);
    if (e.target.value.length == 36) {
      //length of gameID
      setTxtgameid(e.target.value);
    }
  };
  
  const handleKeyDown=(e) =>{
    if (e.code === 'KeyM' || hidePlayBtn)
      setShowMenu(true)
  }

  document.addEventListener("keydown", handleKeyDown);

  const getModalContent = () => {
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
        {  hidePlayBtn ? getMenu() : null}
      </div>
    );
  };

  const handleCopyClick =(item) =>{
    navigator.clipboard.writeText(item)
    console.log("item", item);
    copy(item)
  }

  const closeMenu =() =>{
    setShowMenu(false)
  }

  const getMenu =() =>{
    return (
      <>
        {/* {txtGameId ? */}
        <>
            <div css={iconContainer} onClick={closeMenu}>
              <img src={Close} alt="aClose" css={close}/>
            </div>
            <div css={[centerAlign, container]}>
              {storedNames.map((item) =>{
               return(
                 <div css={copyBtnContainer}>
                   <div css={txtStyle}>World Id: {item}</div>
                    <button
                      id="copyBtn"
                      css={[txtStyle, ctaBtn, copyBtn]}
                     onClick={() => handleCopyClick(item)}
                    >
                      Copy
                    </button>
                 </div>
               ) 
               
              })}
             
            </div>

            {/* {hidePlayBtn ? ( */}
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
                <button css={[menu, ctaBtn]} onClick={onClickJoinWorld}>
                  Join World
            </button>
              </div>
            {/* ) : null} */}
        </>
        
        {/* : null} */}
      </>
    )
  }
 

  return (
    <>
        <div style={{ display :'flex'}}>
          <span css={txtStyle} style={{ fontSize: "3rem", margin: 0 , flex:1}}>
            Our Craft
          </span>
        </div>
  
      <>
        {txtGameId ? (
          <>
            <Crosshair x={x} y={y} />
            <Canvas shadowMap sRGB>
              <Stars color="black" />
              <Sky sunPosition={[100, 20, 100]} />
              <ambientLight intensity={0.25} />
              <pointLight
                castShadow
                intensity={0.7}
                position={[100, 100, 100]}
              />
              <Hud position={[0, 1.1, -2]} />
              <Physics gravity={[0, -30, 0]}>
                <Ground position={[0, 0.5, 0]} onBlockPlaced={onBlockPlaced} />
                <Player position={[0, 3, 10]} />
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
          children={getModalContent()}
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
      {showTouchControls ? <TouchControls /> : null}
    </>
  );
}

export default App;
