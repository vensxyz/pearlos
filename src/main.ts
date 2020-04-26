// import
import { Pearl } from "pearl/Pearl";

// init
const pearl: Pearl = new Pearl("pearlos");

// main loop
export const loop = () => {

    pearl.load();
    pearl.run();
    pearl.unload();

    for (const name in Memory.creeps) {
        if (!(name in Game.creeps)) {
            delete Memory.creeps[name];
        }
    }
};