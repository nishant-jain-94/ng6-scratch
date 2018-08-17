import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
	selector: 'app',
	template: `<div>Hello World</div>`
})
class AppComponent { }

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
	],
	bootstrap: [
		AppComponent,
	],
})
class AppModule { }


platformBrowserDynamic().bootstrapModule(AppModule);