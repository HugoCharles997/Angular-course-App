import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#AC6555';
  private defaultHeight: number = 180;
  private hoverHeight: number = 200;

  constructor(private el: ElementRef) { 
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
  }                                   //elementref from angular core, it represents reference to pokemon cards (so the dom element we want to act)

  @Input('pkmnBorderCard') borderColor: string;
  @Input('pkmnHeightHover') borderHeight: number;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  private setHeight(height: number) {
    this.el.nativeElement.style.height = height + 'px';       //native element to acces to the real element to call the directive
  }

  private setBorder(color: string) {
    let border = 'solid 6px' + color;
    this.el.nativeElement.style.border = border;
  }
}
