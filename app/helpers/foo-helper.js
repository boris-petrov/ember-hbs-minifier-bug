import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';

export default class extends Helper {
  @service
  templates;

  pendingResult = undefined;

  compute() {
    const pendingResult = this.pendingResult;
    if (pendingResult != undefined) {
      delete this.pendingResult;
      return pendingResult;
    }

    this.templates.render(element => {
      this.pendingResult = element;
      this.recompute();
    });
  }
}
