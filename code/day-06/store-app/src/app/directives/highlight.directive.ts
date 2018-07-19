import {
  Directive,
  ElementRef,
  OnInit,
  Input,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() color = 'yellow';

  constructor(private hostElement: ElementRef) {}

  ngOnInit() {
    // this.hostElement.nativeElement.style.backgroundColor = this.color;
  }

  private setColor(color) {
    this.hostElement.nativeElement.style.backgroundColor = color;
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.setColor(this.color);
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.setColor('');
  }
}

// p { background-color: blue }

// h1[appHighlight]
// a[href]
// <ng-content></ng-content>
// ngModel

// <h1 appHighlight>
// <p appHighlight>
// <div appHighlight>
