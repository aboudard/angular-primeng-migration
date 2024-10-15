import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { providePrimeNGConfig } from './primeng.config';

export const appConfig: ApplicationConfig = {
  providers: [
    providePrimeNGConfig(),
    provideRouter(routes), 
    importProvidersFrom(BrowserAnimationsModule)
  ]
};
