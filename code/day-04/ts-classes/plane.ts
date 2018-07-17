// Static methods
class Plane {
  numEngines: number;
  enginesActive: boolean;

  constructor(numEngines) {
    this.numEngines = numEngines;
    this.enginesActive = false;
  }

  startEngines() {
    console.log('starting engines…');
    this.enginesActive = true;
  }

  static badWeather(planes: Plane[]) {
    for (let plane of planes) {
      plane.enginesActive = false;
    }
    console.log('All planes are shutdown');
  }
}

const p1 = new Plane(2);
const p2 = new Plane(4);

// Calling a static method
Plane.badWeather([p1, p2]);
