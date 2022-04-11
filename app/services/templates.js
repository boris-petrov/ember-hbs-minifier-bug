import { A } from '@ember/array';
import { next } from '@ember/runloop';
import Service from '@ember/service';

export default class extends Service {
  components = A();

  render(callback) {
    if (this.groupComponent != undefined) {
      this.components.removeObject(this.groupComponent);
    }

    this.groupComponent = { didInsert: callback };

    next(this, () => this.components.pushObject(this.groupComponent));
  }
}
