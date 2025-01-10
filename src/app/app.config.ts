import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { providePrimeNGConfig } from './primeng.config';

export const appConfig: ApplicationConfig = {
  providers: [
    providePrimeNGConfig(),
    // providePrimeNG(MyPreset),
    provideRouter(routes),
    importProvidersFrom(BrowserAnimationsModule),
  ],
};
