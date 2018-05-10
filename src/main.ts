import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));




/*
Component==> All logics and HTml/css
Module==>contain all declratations
Pipe==>Format DATA
Service==> Connect to third party
Gaurds==> Auth the routes
*/
