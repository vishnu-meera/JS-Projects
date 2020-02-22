//stop watch

function StopWatch() {
  let running = false;
  let duration = 0;
  let startTime = null;
  let endTime = null;

  Object.defineProperty(this, "duration", {
    get: function() {
      return duration;
    },
    set: function(value) {
      duration = value;
    }
  });

  Object.defineProperty(this, "running", {
    get: function() {
      return running;
    },
    set: function(value) {
      running = value;
    }
  });

  Object.defineProperty(this, "startTime", {
    get: function() {
      return startTime;
    },
    set: function(value) {
      startTime = value;
    }
  });

  Object.defineProperty(this, "endTime", {
    get: function() {
      return endTime;
    },
    set: function(value) {
      endTime = value;
    }
  });
}

StopWatch.prototype.start = function() {
  if (this.running) throw new Error("Timer is running...");
  this.running = true;
  this.startTime = new Date();
};

StopWatch.prototype.stop = function() {
  if (!this.running) throw new Error("Timer is not running...");
  this.running = false;
  this.endTime = new Date();
  const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
  this.duration += seconds;
};

StopWatch.prototype.reset = function() {
  this.duration = 0;
  this.startTime = null;
  this.endTime = null;
  this.running = false;
};
