import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() color = 'yellow';

  constructor(private hostElement: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}

  setColor(color) {
    this.renderer.setStyle(
      this.hostElement.nativeElement,
      'backgroundColor',
      color
    );
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.setColor(this.color);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.setColor('');
  }
}
