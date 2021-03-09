import React from "react";
import { css, jsx } from '@emotion/core';
import style from '../style'
import { BiUpArrow, BiRightArrow, BiDownArrow, BiLeftArrow } from 'react-icons/bi'
import { GiJumpAcross } from "react-icons/gi"



export const TouchControls = () => {
    // const {  
    //         moveRightBtn,
    //         moveDownBtn,
    //         moveLeftBtn,
    //         jumpBtn } = style;

    const moveUpBtn = {
        top: "673px",
        left: "157px",
        width: "124px",
        height: "125px",
        "background-color": "grey",
        border: "3px solid #909090",
        "border-radius": "67px",
        opacity: "0.86"
    }
    const moveRightBtn = {
        left: "280px",
        width: "125px",
        height: "124px",
        "background-color": "grey",
        border: "3px solid #909090",
        "border-radius": "67px",
        opacity: "0.86",
    }

    const moveDownBtn = {
        top: "921px",
        left: "156px",
        width: "125px",
        height: "124px",
        "background-color": "grey",
        border: "3px solid #909090",
        "border-radius": "67px",
        opacity: "0.86",
    }

    const moveLeftBtn = {
        top: "921px",
        left: "156px",
        width: "125px",
        height: "124px",
        "background-color": "grey",
        border: "3px solid #909090",
        "border-radius": "67px",
        opacity: "0.86",
    }

    const jumpBtn = {
        top: "921px",
        left: "156px",
        width: "95px",
        height: "95px",
        "background-color": "grey",
        border: "3px solid #909090",
        "border-radius": "67px",
        opacity: "0.86",
    }

    const gameController = {
        display: "grid",
        position: "absolute",
        bottom: "10px",
        left: "10px",
        "grid-template-rows": "125px 125px 125px",
        "grid-template-columns": "125px 125px 125px",
    }

    const box = {
        display: "flex",
        "align-items": "center",
        "justify-content": "center",
        color: "#AAA",
    }

    const arrows = {
        "font-size": "75px",
    }

    return (
    //     <div style = {{  position: 'absolute', bottom: '20px'  }}>
    //     <button style={moveUpBtn}>Up button</button>
    //     <button style={moveRightBtn}>Right button</button>
    //     <button style={moveDownBtn}>Down Button</button>
    //     <button style={moveLeftBtn}>Left Button</button>
    //     <button style={jumpBtn}>Jump Button</button>
    //   </div> 
        <div style={gameController}>
            <div style={box}></div>
            <div style={box}><button style={moveUpBtn}><BiUpArrow style={arrows} /></button></div>
            <div style={box}></div>
            <div style={box}><button style={moveLeftBtn}><BiLeftArrow style={arrows} /></button></div>
            <div style={box}><button style={jumpBtn}><GiJumpAcross style={{"font-size": "50px"}} /></button></div>
            <div style={box}><button style={moveRightBtn}><BiRightArrow style={arrows} /></button></div>
            <div style={box}></div>
            <div style={box}><button style={moveDownBtn}><BiDownArrow style={arrows} /></button></div>
            <div style={box}></div>
        </div>
    )     
};