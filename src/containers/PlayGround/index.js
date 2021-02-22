/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import React, { useEffect, useState } from 'react';
import { Canvas } from "react-three-fiber"
import { Sky } from "drei"
import { Physics } from "use-cannon"
import { Ground } from "../../components/Ground"
import Cubes from "../../components/Cubes"
import { Player } from "../../components/Player"
import { Hud } from "../../components/Hud"
import { Crosshair } from "../../components/Crosshair"
import style from './style'
import ModalComponent from '../../components/Modal'

const PlayGround =() => {
    const [showModal, setShowModal] = useState(true)
    const menuItems = [
        'Resume', 'Invite Players', 'help', 'quit'
    ]

    const closeModal = () => {
        setShowModal(false)
    }


    const { menu } = style

    const getMenuContent = () => {
        return (
            <div >
                {menuItems.map((item) => {
                    return (
                        <div css={menu} onClick={closeModal}>{item}</div>
                    )
                })}

            </div>
        )
    }


    return (
        <div style={{ height: '100%' }}>
            <Crosshair />
            <Canvas shadowMap sRGB>
                <Sky sunPosition={[100, 20, 100]} />
                <ambientLight intensity={0.25} />
                <pointLight castShadow intensity={0.7} position={[100, 100, 100]} />
                <Hud position={[0, 0, -2]} />
                <Physics gravity={[0, -30, 0]}>
                    <Ground position={[0, 0.5, 0]} />
                    <Player position={[0, 3, 10]} />
                    <Cubes />
                </Physics>
            </Canvas>

            <ModalComponent
                open={showModal}
                onClose={showModal}
                headerText="menu"
                centerheader
                closeButton
                children={getMenuContent()}
            />
        </div>
    );
}

export default PlayGround;
