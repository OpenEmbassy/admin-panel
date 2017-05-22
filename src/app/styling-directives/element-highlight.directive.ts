import { Directive, Renderer2, ElementRef, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appElementHighLighter]'
})

export class ElementHighLighter implements OnInit {
    @Input() defaultColor: string = 'transparent';
    @Input() highlightColor: string = '#673ab7';
    @HostBinding('style.backgroundColor') backgroundColor = 'transparent';
    @HostBinding('style.color') color = 'black';

    constructor(private elRef: ElementRef, private renderer: Renderer2) {
    }

    ngOnInit() {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightgrey', false, false);
    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightgrey'); Note: used if HostBinind is not used
        this.backgroundColor = this.highlightColor;
        this.color = 'white';
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
        this.backgroundColor = this.defaultColor;
        this.color = 'black';
    }

}
