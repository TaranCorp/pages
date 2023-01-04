import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
  constructor(private element: ElementRef) { }

  @Input('appClass') set classNames(properties: {[key: string]: boolean}) {
    for (let key in properties) {
      if (properties[key]) {
        this.element.nativeElement.classList.add(key)
      } else {
        this.element.nativeElement.classList.remove(key)
      }
    }
  }
}
