import { Directive, ElementRef, Input } from '@angular/core';
@Directive({ selector: '[colorContrast]'})
export class ColorContrastDirective {

	private dark:string;
	private light:string;
	public el:ElementRef;

	@Input('colorContrast') mainColor: string;
    

    constructor(el: ElementRef) {
       this.el = el;
       this.dark = '#000000';
       this.light = '#ffffff';
    }

    ngOnInit():any {
        this.convertColor();
    }

    convertColor() {
       if (this.mainColor) {
            this.mainColor = this.stripNumberSign(this.mainColor);
            let contrast = this.getContrastYIQ(this.mainColor);
            this.el.nativeElement.style.color = contrast;
          }
    }

    // 24 WAYS - http://24ways.org/2010/calculating-color-contrast/
    getContrastYIQ(hexcolor:string){
    	let r = parseInt(hexcolor.substr(0,2),16);
    	let g = parseInt(hexcolor.substr(2,2),16);
    	let b = parseInt(hexcolor.substr(4,2),16);
    	let yiq = ((r*299)+(g*587)+(b*114))/1000;
    	return (yiq >= 128) ? this.dark : this.light;
    }

    stripNumberSign(color:any){
        if(color[0] === "#") {
            color = color.substring(1, color.length);
        }
        return color;
    }
}