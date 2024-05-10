import { createEngine, createController as createGoodController } from "./headless_1.js";
import { createController as createBadController } from "./headless_2.js";

const engine = createEngine();

console.log("When the engine & controller comes from the same module:");
createGoodController(engine)
console.log("When the engine & controller comes from different modules:");
createBadController(engine);
