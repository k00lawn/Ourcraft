
import { css } from '@emotion/core';

export default {


    menu: css`
         width: 100%;
        background-color: white;
        padding: 20px;
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
     `,
     txtStyle: css`
      font-family: arcadeClassic;
       font-size: 2rem;
       text-align: center;
     `,
     centerAlign: css`
      display: flex ;
      justify-content: center;
     `,
     inputBoxStyle: css`
         width: 80%;
         display: flex;
         margin: auto;
         padding: 20px;
         background-color: white;
         margin-bottom:10px;
     `


}