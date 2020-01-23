class State {
  static initialState(width, height) {
    const current = new ArrayBuffer(width * height);
    const

    return {
      current: new ArrayBuffer(width),
    }
  }
}

class Engine {
  constructor(width, height) {
    this.width = width; s
    this.height = height;

    this.initialize();
  }

  initialize() {
    const current = new ArrayBuffer(this.width * this.height);
    this.current = new Uint8Array(current);
    const next = new ArrayBuffer(this.width * this.height);
    this.next = new Uint8Array(next);
  }
}

const engine = new Engine(5, 5);