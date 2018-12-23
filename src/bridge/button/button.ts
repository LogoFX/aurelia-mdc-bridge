import { bindable, bindingMode, customAttribute, inject } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';
import { MDCRipple } from '@material/ripple';
import * as util from '../util';

@customAttribute('mdc-button')
@inject(Element)
export class MdcButton {
  @bindable() public dense = false;
  @bindable() public raised = false;
  @bindable() public stroked = false;
  @bindable() public unelevated = false;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public ripple = true;
  private log: Logger;

  constructor(private element: Element) {
    this.log = getLogger('mdc-button');
  }

  private attached() {
    this.element.classList.add('mdc-button');

    this.denseChanged(this.dense);
    this.raisedChanged(this.raised);
    this.strokedChanged(this.stroked);
    this.unelevatedChanged(this.unelevated);

    // add ripple effect
    if (util.getBoolean(this.ripple)) {
      MDCRipple.attachTo(this.element);
    }
  }

  private detached() {
    const classes = [
      'mdc-button',
      'mdc-button--dense',
      'mdc-button--raised',
      'mdc-button--stroked',
      'mdc-button--unelevated',
      'mdc-card__action',
      'mdc-card__action--button'
    ];
    this.element.classList.remove(...classes);
  }

  private denseChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.element.classList[value ? 'add' : 'remove']('mdc-button--dense');
  }

  private raisedChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.element.classList[value ? 'add' : 'remove']('mdc-button--raised');
  }

  private strokedChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.element.classList[value ? 'add' : 'remove']('mdc-button--stroked');
  }

  private unelevatedChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.element.classList[value ? 'add' : 'remove']('mdc-button--unelevated');
  }
}
