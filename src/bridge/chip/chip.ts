import { bindable, bindingMode, customAttribute, inject } from 'aurelia-framework';
import { MDCChip } from '@material/chips';
import * as util from '../util';

export class MdcChip {
  private chipElement: HTMLDivElement;
  private mdcElement: MDCChip;

  @bindable() public selected: boolean = false;

  constructor(private element: Element) {
    console.log("MdcChip .ctor, Element="+element)
  }

  private attached() {

    console.log("MdcChip attached()")

    this.mdcElement = new MDCChip(this.chipElement);
    this.selectedChanged(this.selected);
  }

  private detached() {
    const classes = [
      'mdc-chip--selected',
    ];

    if (this.element) {
      this.element.classList.remove(...classes);
    }

    if (this.mdcElement) {
       this.mdcElement.destroy(); }
  }

  private selectedChanged(newValue: boolean) {
    const value = util.getBoolean(newValue);
    if (this.element) {
      this.element.classList[value ? 'add' : 'remove']('mdc-chip--selected');
    }
  }
}
