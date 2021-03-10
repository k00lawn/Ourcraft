import { css } from "@emotion/core";

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
    &: hover {
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
    display: flex;
    justify-content: center;
  `,
  inputBoxStyle: css`
    width: 80%;
    display: flex;
    margin: auto;
    padding: 20px;
    background-color: white;
    margin-bottom: 10px;
  `,
  moveUpBtn: css`
    top: 673px;
    left: 157px;
    width: 124px;
    height: 125px;
    background-color: grey;
    border: 3px solid #909090;
    border-radius: 67px;
    opacity: 0.86;
  `,

  gameController: css`
    display: grid;
    position: absolute;
    bottom: 10px;
    left: 10px;
    grid-template-rows: 125px 125px 125px;
    grid-template-columns: 125px 125px 125px;
  `,

  moveRightBtn: css`
    left: 280px;
    width: 125px;
    height: 124px;
    background-color: grey;
    border: 3px solid #909090;
    border-radius: 67px;
    opacity: 0.86;
  `,

  moveDownBtn: css`
    top: 921px;
    left: 156px;
    width: 125px;
    height: 124px;
    background-color: grey;
    border: 3px solid #909090;
    border-radius: 67px;
    opacity: 0.86;
  `,

  moveLeftBtn: css`
    top: 921px;
    left: 156px;
    width: 125px;
    height: 124px;
    background-color: grey;
    border: 3px solid #909090;
    border-radius: 67px;
    opacity: 0.86;
  `,

  jumpBtn: css`
    top: 921px;
    left: 156px;
    width: 95px;
    height: 95px;
    background-color: grey;
    border: 3px solid #909090;
    border-radius: 67px;
    opacity: 0.86;
  `,

  box: css`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #aaa;
  `,
  arrows: css`
    font-size: 75px;
  `,
};
