import * as THREE from 'three';import {clamp} from '../utils/MathUtils';
export class CameraController{constructor(camera,input){this.camera=camera;this.input=input;this.yaw=0;this.pitch=0;} update(){const m=this.input.consumeMouse();this.yaw-=m.dx*0.002;this.pitch=clamp(this.pitch-m.dy*0.002,-1.5,1.5);this.camera.quaternion.setFromEuler(new THREE.Euler(this.pitch,this.yaw,0,'YXZ'));}}
