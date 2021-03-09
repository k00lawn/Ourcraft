
import { css } from '@emotion/core';

export default {


    menu: css`
         width: 100%;
        background-color: white;
        padding: 15px;
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
            font-size: 30px;
            text-align: center;
        @media (max-width: 450px ) {
            font-size: 20px;
        }
     `,
     centerAlign: css`
      display: flex ;
      justify-content: center;
     `,
     inputBoxStyle: css`
         width: 80%;
         display: flex;
         margin: auto;
         padding: 10px;
         background-color: white;
         margin-bottom:10px;
     `,
     btn : css`
        
            width: 100%;
            height: 100%;
          background-color: grey;
        //    @media (max-width: 450px ) {
        //     width: 50px;
        //     height:50px;
        //  }
     `,
     moveUpBtn: css`
         top: 673px;
        left: 157px;
        border: 3px solid #909090;
        border-radius: 67px;
        opacity: 0.86
        `,

     gameController : css`
       display: grid;
        position: absolute;
        bottom: 10px;
        left: 10px;
        grid-template-rows: 70px 70px 70px;
        grid-template-columns: 70px 70px 70px;

         @media (max-width: 450px ) {

         }
     `,
    
    moveRightBtn: css`
         left: 280px;
         border: 3px solid #909090;
        border-radius: 67px;
        opacity: 0.86;
        
    `,

    moveDownBtn: css`
         top: 921px;
        left: 156px;
        border: 3px solid #909090;
        border-radius: 67px;
        opacity: 0.86;
        `,

    moveLeftBtn: css`
        top: 921px;
        left: 156px;
        border: 3px solid #909090;
        border-radius: 67px;
        opacity: 0.86;
        `,

    jumpBtn: css`
       top: 921px;
        left: 156px;
      
        border: 3px solid #909090;
        border-radius: 67px;
        opacity: 0.86;
        `,

     box : css`
      display: flex;
        align-items: center;
        justify-content: center;
        color: #AAA;
          width: 124px;
          height: 125px;
        @media (max-width: 450px ) {
            width: 50px;
            height:50px;
         }

    `,
    arrows : css`
     font-size: 2rem;
    `,
    ctaBtn: css`
        @media (max-width: 450px ) {
                height: 50px;
                font-size: 1.3rem;
                align-items: center;
        }
       
    
    `
 
}