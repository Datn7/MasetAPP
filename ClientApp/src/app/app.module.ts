import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { UserComponent } from './user/user.component';

import { NgxGalleryModule } from 'ngx-gallery';

export class CustomHammerConfig extends HammerGestureConfig {
	overrides = {
		pinch: { enable: false },
		rotate: { enable: false }
	};
}

@NgModule({
	declarations: [
		AppComponent,
		NavMenuComponent,
		HomeComponent,
		CounterComponent,
		FetchDataComponent,
		UserComponent
	],
	imports: [
		BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
		HttpClientModule,
		FormsModule,
		NgxGalleryModule,
		RouterModule.forRoot([
			{ path: '', component: HomeComponent, pathMatch: 'full' },
			{ path: 'counter', component: CounterComponent },
			{ path: 'fetch-data', component: FetchDataComponent }
		])
	],
	providers: [ { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig } ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
