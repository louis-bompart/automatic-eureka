function PrimordialEngine() {
  this.stack = /\(.*\)$/.exec(new Error().stack.split("\n")[1])[0];
}

const tryToFindTrace = (engine) => {
  function StackFinder() {
    Object.getPrototypeOf(engine).constructor.call(this);
  }
  StackFinder.prototype.extractStack = function () {
    return this.stack;
  };
  return new StackFinder().extractStack() || null;
};

export function createController(engine) {
  if (!(engine instanceof PrimordialEngine)) {
    const badStack = tryToFindTrace(engine);
    if (badStack) {
      const goodStack = tryToFindTrace(new PrimordialEngine());
      console.error(
        `Error: This controller has received an engine created from ${badStack} instead of ${goodStack}`
      );
    }
  } else {
    console.log("ok!");
  }
}

export const createEngine = () => Object.create(PrimordialEngine.prototype);
