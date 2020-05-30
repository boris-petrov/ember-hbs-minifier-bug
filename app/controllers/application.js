import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class extends Controller {
  @service
  templates;

  dynamicComponentsDetachedElement = document.createElement('div');

  numbers = [1];

  init() {
    super.init(...arguments);

    setTimeout(() => this.numbers.pushObject(2), 300);
  }
}
