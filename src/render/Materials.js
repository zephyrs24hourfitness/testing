import * as THREE from 'three';import {terrainVS,terrainFS,waterVS,waterFS} from './Shaders';
export const createTerrainMaterial=(atlas)=>new THREE.ShaderMaterial({vertexShader:terrainVS,fragmentShader:terrainFS,uniforms:{atlas:{value:atlas},fogColor:{value:new THREE.Color('#bcd')},fogNear:{value:20},fogFar:{value:220}},side:THREE.FrontSide,transparent:false});
export const createWaterMaterial=()=>new THREE.ShaderMaterial({vertexShader:waterVS,fragmentShader:waterFS,transparent:true,depthWrite:false,uniforms:{time:{value:0},fogColor:{value:new THREE.Color('#bcd')}}});
