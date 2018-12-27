import { MDCChipSet } from '@material/chips';
import { getLogger, Logger } from 'aurelia-logging';
import { autoinject, customElement } from 'aurelia-framework';

@customElement('mdc-chip-set')
@autoinject
export class MdcChipSet {
  private log: Logger;
  private chipSetElement: HTMLDivElement;
  private mdcElement: MDCChipSet;

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
    if (this.mdcElement) { this.mdcElement.destroy(); }
  }
}
