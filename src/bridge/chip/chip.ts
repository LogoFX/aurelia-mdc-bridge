import { bindable, bindingMode, customAttribute, inject } from 'aurelia-framework';
import { MDCChip } from '@material/chips';
import * as util from '../util';

export class MdcChip {
  private chipElement: HTMLDivElement;
  private mdcElement: MDCChip;

  @bindable({ defaultBindingMode: bindingMode.twoWay }) 
  public selected: boolean = false;

  @bindable()
  public leading: string = null;
  
  @bindable()
  public trailing: string = null;

  constructor(private element: Element) {
  }

  private attached() {

    this.mdcElement = new MDCChip(this.chipElement);
    this.selectedChanged(this.selected);
  }

  private detached() {
    const classes = [
      'mdc-chip--selected',
    ];

    if (this.chipElement) {
      this.chipElement.classList.remove(...classes);
    }

    if (this.mdcElement) {
       this.mdcElement.destroy(); 
    }
  }

  private selectedChanged(newValue: boolean) {
    const value = util.getBoolean(newValue);
    if (this.chipElement) {
      this.chipElement.classList[value ? 'add' : 'remove']('mdc-chip--selected');
    }
  }
}
