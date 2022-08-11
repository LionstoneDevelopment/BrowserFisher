// import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementFishCaught, pushInventory } from '../../coinSlice';
import { Canvas, extend } from '@react-three/fiber';
import { PresentationControls, Sparkles, BakeShadows, Effects } from '@react-three/drei';
import { Suspense, useEffect } from 'react';
import House from '../../components/House1';
import House2 from '../../components/House2';
import Pond from '../../components/Littlepond';
import * as THREE from "three";
import Tube from "../Tube";
import Tree from '../Tree';
import { UnrealBloomPass } from 'three-stdlib'

extend({UnrealBloomPass});

const FishArea = () => {

    const fishNumber = useSelector(state => state.amounts.fishCaught);
    const inventoryContent = useSelector(state => state.amounts.inventoryContent);
    const inventorySize = useSelector(state => state.amounts.inventorySize);
    const vacuumAmount = useSelector(state => state.amounts.upgrades[2].arrayAmount);
    const dispatch = useDispatch();

    const wat = {
        name: 'voorntje',
        weight: 0.3,
        price: 2000,
        url: "https://cdn-icons-png.flaticon.com/512/2739/2739459.png"   
    };

    const randomNumber = () => {
        const generatedNumber = Math.floor(Math.random() * 10);

        if (generatedNumber === 1) {
            dispatch(incrementFishCaught());
            dispatch(pushInventory(wat));
        } else {
            console.log("No Fish Caught!");
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(incrementFishCaught());
            dispatch(pushInventory(wat));
        console.log('Autofish every 2 seconds!');
        }, 500);
    
        return () => clearInterval(interval);
    },);
    
    

    return (
    <div className="fisharea-container">
        <div className='fisharea-info'>
            <div className="top-title">
                <h1>Fishing Area</h1>
            </div>
            <div className='stats-row'>
                <div className='total-caught'>Total fish caught:<span> {fishNumber} </span></div>
            </div>
        </div>
        <div className='canvas-container'>
            <Canvas  flat dpr={[1, 2]} camera={{ fov: 25, position: [0, 0, 8] }}>
                <Suspense fallback={null}>
                <color attach="background" args={['#ADD8E6']} />
                <fog attach="fog" args={['#ADD8E6', 0, 15]} />
                <hemisphereLight castShadow intensity={1} color="#eaeaea" groundColor="blue" />
                <directionalLight castShadow intensity={1} shadow-mapSize={[1024, 1024]} shadow-bias={-0.0001} position={[10, 10, -10]} />
                <PresentationControls global zoom={0.7} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
                    <group dispose={null}>
                    <Sparkles count={1000} scale={[20, 20, 10]} size={5} speed={2} />
                        <House castShadow receiveShadow scale={.1} position={[0, .6, .9]} rotation={[0,.5,0]}/>
                         <House2 castShadow receiveShadow scale={.1} position={[0, 0, -1.3]} rotation={[0,-5.5,0]} />
                         <Tree scale={.4} position={[-.4, 0, 0]}/>
                         <Tree scale={.4} position={[-.7, 0, -.7]}/>
                         <Tree scale={.35} position={[-.8, 0, .7]}/>
                         <Tree scale={.25} position={[1.5, 0, 1.5]}/>
                         <Tree scale={.28} position={[2, 0, -1.5]}/>
                         <primitive object={new THREE.AxesHelper(10)} />
                            <mesh receiveShadow position={[0, 0, 0]} rotation={[-1.575,0,0]} scale={[30, 30, 30]}>
                                <planeBufferGeometry />
                                <meshBasicMaterial color="green" />
                            </mesh>
                    {inventoryContent.length <= inventorySize ? 
                    <Pond onClick={() => randomNumber() } castShadow receiveShadow scale={.1} position={[1.8, 0, 0]} rotation={[0, 0,0]} />  :
                    <Pond castShadow receiveShadow scale={.1} position={[1.8, 0, 0]} rotation={[0, 0,0]} />}


                            {console.log(vacuumAmount)}
                            {vacuumAmount.map((item, index) => {
                            const updatedIndex = (index / 2) + 1.3;
                            return <Tube scale={.07} key={index} position={[updatedIndex, -.1, .5]}/>; 
                            })}


                    </group>
                    <Effects disableGamma>
                        <unrealBloomPass threshold={1} strength={3} radius={.2} />
                    </Effects>
                    <BakeShadows />
                </PresentationControls>
                </Suspense>
            </Canvas>
        </div>
        
        {console.log(inventoryContent, inventoryContent.length)}
    </div>
    );
};

export default FishArea;