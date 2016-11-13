# ng2-color-contrast
Automatically set the text color based on the background.

#How to use
1. Add directive to project app/src/components/ng2-color-contrast/ng2-color-contrast.ts
2. Add import to app.module 
	- import { ColorContrastDirective } from '../components/color-contrast/color-contrast.directive';
	- add ColorContrastDirective to declarations array
3. Use in html 
	- <p [colorContrast]="color"></p>
	- <p [colorContrast]="'#ff0000'"></p>

#Original Repository 
This is an upgrade to Angular 2 from the Angular 1 version https://github.com/evert0n/angular-color-contrast

