//es

class StopWatch {
  constructor() {
    this.running = false;
    this.duration = 0;
    this.startTime = null;
    this.endTime = null;
  }
  start() {
    if (this.running) throw new Error("Timer is running...");
    this.running = true;
    this.startTime = new Date();
  }
  stop() {
    if (!this.running) throw new Error("Timer is not running...");
    this.running = false;
    this.endTime = new Date();
    const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
    this.duration += seconds;
  }

  reset() {
    this.duration = 0;
    this.startTime = null;
    this.endTime = null;
    this.running = false;
  }
}

const watch = new StopWatch();
