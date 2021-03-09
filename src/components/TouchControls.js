/** @jsx jsx */
import React from "react";
import { css, jsx } from '@emotion/core';
import style from '../style'
import { BiUpArrow, BiRightArrow, BiDownArrow, BiLeftArrow } from 'react-icons/bi'
import { GiJumpAcross } from "react-icons/gi"



export const TouchControls = () => {
    const {  
            moveRightBtn,
        moveDownBtn, moveUpBtn, arrows,
            moveLeftBtn,
        jumpBtn, gameController, box} = style;


    return (
  
        <div css={gameController}>
            <div css={box}></div>
            <div css={box}><button css={moveUpBtn}><BiUpArrow css={arrows} /></button></div>
            <div css={box}></div>
            <div css={box}><button css={moveLeftBtn}><BiLeftArrow css={arrows} /></button></div>
            <div css={box}><button css={jumpBtn}><GiJumpAcross css={{"font-size": "50px"}} /></button></div>
            <div css={box}><button css={moveRightBtn}><BiRightArrow css={arrows} /></button></div>
            <div css={box}></div>
            <div css={box}><button css={moveDownBtn}><BiDownArrow css={arrows} /></button></div>
            <div css={box}></div>
        </div>
    )     
};