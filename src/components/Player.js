import React, { useEffect, useRef } from 'react';
import { useSphere } from 'use-cannon';
import { useThree, useFrame } from 'react-three-fiber';

export const Player = (props) => {
    const { camera } = useThree();
    const [ref] = useSphere(() => ({
        mass: 1,
        type: 'Dynamic',
        ...props,
    }));

   

    useFrame(() => {
        camera.position.copy(ref.current.position);     
    });
    return (
        <>
            {/* <FPVControls /> */}
            <mesh ref={ref} />
        </>
    );
};