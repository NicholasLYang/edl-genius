const Timecode = require('timecode-boss');

class MotionEffect {
  constructor(input) {
    if (input instanceof MotionEffect || typeof input === 'object') {
      if (input.reel) this.reel = input.reel;
      if (input.speed) this.speed = input.speed;
      if (input.entryPoint) this.entryPoint = new Timecode(input.entryPoint);
    } else {
      throw new TypeError(`Cannot create MotionEffect from ${input}`);
    }
  }

  toObject() {
    const obj = {};

    if (this.reel) obj.reed = this.reel;
    if (this.speed) obj.speed = this.speed;
    if (this.entryPoint) obj.entryPoint = this.entryPoint.toObject();

    return obj;
  }
}

module.exports = MotionEffect;
