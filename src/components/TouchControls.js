import React from "react";
import { css, jsx } from '@emotion/core';
import style from '../style'



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

    return (
        <div style = {{  position: 'absolute', bottom: '20px'  }}>
        <button style={moveUpBtn}>Up button</button>
        <button style={moveRightBtn}>Right button</button>
        <button style={moveDownBtn}>Down Button</button>
        <button style={moveLeftBtn}>Left Button</button>
        <button style={jumpBtn}>Jump Button</button>
      </div> 
    )     
};