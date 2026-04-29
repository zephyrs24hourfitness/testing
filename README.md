# Browser Voxel Game (Three.js + Vite)

## Install
- `npm install`

## Run
- Dev: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`

## Controls
- Click canvas: pointer lock
- WASD: move relative to camera yaw
- Shift: sprint
- Space: jump
- Mouse: look
- Left click: break block (except bedrock)
- Right click: place selected block
- 1-8: hotbar select

## Project Structure
See `src/core`, `src/world`, `src/render`, `src/ui`, `src/utils`.

## Systems Implemented
- Chunked deterministic terrain by seed
- 3D cave carving biased to deeper layers
- Separate water mesh + transparent shader (`depthWrite=false`)
- Procedural texture atlas via canvas
- Custom terrain + water shaders
- DDA voxel raycast interaction
- Chunk generation queue with per-frame budget
- Chunk unload/dispose and edit persistence map
- Basic village generator scaffolding module (ready to integrate further)

## Notes
- Terrain uses layered FBM + ridge-like noise for mountains/plains.
- Meshing renders visible faces only and uses fixed winding/UV orientation.
- Water is optional via world config.

## Future Expansion
- Integrate full village stamping pass
- Add better AABB collision sweeps and step-up logic
- Add biomes and LOD chunk updates
- Add save/load for edits and player state
- Improve ambient occlusion and shadowing
