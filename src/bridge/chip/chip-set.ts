import { MDCChipSet } from '@material/chips';
import { getLogger, Logger } from 'aurelia-logging';
import { autoinject, customElement, bindable } from 'aurelia-framework';
import * as util from '../util';

@customElement('mdc-chip-set')
@autoinject
export class MdcChipSet {
  private log: Logger;
  private chipSetElement: HTMLDivElement;
  private mdcElement: MDCChipSet;

  @bindable() 
  public choice: boolean = false;

  constructor(private element: Element) {
    this.log = getLogger('mdc-chip-set');
    // tslint:disable-next-line:no-console
    console.log(element);
  }

  private bind() { /** */ }
  private unbind() { /** */ }

  private attached() {
    // tslint:disable-next-line:no-console
    console.log('MdcChipSet attached() - {0}', this.chipSetElement);
    this.mdcElement = new MDCChipSet(this.chipSetElement);
  }

  private detached() {
    const classes = [
      'mdc-chip-set--choice',
    ];

    if (this.chipSetElement) {
      this.chipSetElement.classList.remove(...classes);
    }

    if (this.mdcElement) {
       this.mdcElement.destroy(); 
    }
  }

  private choiceChanged(newValue: boolean) {
    const value = util.getBoolean(newValue);
    if (this.chipSetElement) {
      this.chipSetElement.classList[value ? 'add' : 'remove']('mdc-chip-set--choice');
    }
  }
}
