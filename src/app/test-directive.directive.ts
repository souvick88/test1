import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { BarComponent } from './bar/bar.component';

@Directive({
  selector: '[appTestDirective]'
})
export class TestDirectiveDirective implements OnInit {
  @Input() innerText = ''
  constructor(
    private elRef: ElementRef
  ) { }

  ngOnInit(): void {
    console.log(this.elRef.nativeElement as BarComponent["focusTiger"])

    // this.elRef.nativeElement as BarComponent["focusTiger"];
  }
}
