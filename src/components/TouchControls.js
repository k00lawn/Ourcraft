/** @jsx jsx */
import React from "react";
import { css, jsx } from '@emotion/core';
import style from '../style'
import { BiUpArrow, BiRightArrow, BiDownArrow, BiLeftArrow } from 'react-icons/bi'
import { ImRadioUnchecked } from "react-icons/im"


export const TouchControls = () => {
    const {  
            moveRightBtn,
            moveDownBtn, 
            moveUpBtn, 
            moveLeftBtn,
            jumpBtn, 
            arrows,
            gameController, 
            box
        } = style;


    return (
  
        <div css={gameController}>
            <div css={box}></div>
            <div css={box}><button css={moveUpBtn}><BiUpArrow css={arrows} /></button></div>
            <div css={box}></div>
            <div css={box}><button css={moveLeftBtn}><BiLeftArrow css={arrows} /></button></div>
            <div css={box}><button css={jumpBtn}><ImRadioUnchecked css={{"font-size": "50px"}} /></button></div>
            <div css={box}><button css={moveRightBtn}><BiRightArrow css={arrows} /></button></div>
            <div css={box}></div>
            <div css={box}><button css={moveDownBtn}><BiDownArrow css={arrows} /></button></div>
            <div css={box}></div>
        </div>
    )     
};