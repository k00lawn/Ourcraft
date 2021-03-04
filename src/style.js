
import { css } from '@emotion/core';

export default {


    menu: css`
         width: 100%;
        background-color: white;
        padding: 20px;
        margin-bottom: 40px;
        border: 2px solid black;
        display: flex;
        justify-content: center;
        font-family: arcadeClassic;
        font-size: 3rem;
        opacity: 0.9;
         &: hover{
            border: 2px solid white;
            color: darkgrey;
        }
     `,

     hideBtn: css`
        display: none;
     `


}