import { APP_INITIALIZER, EnvironmentProviders, makeEnvironmentProviders } from "@angular/core";
import { PrimeNGConfig } from "primeng/api";

export function initializeApp(config: PrimeNGConfig) {
    return () => {
      config.ripple = true;
    };
  }

export function providePrimeNGConfig(): EnvironmentProviders {
    return makeEnvironmentProviders([
      {
        provide: APP_INITIALIZER,
        multi: true,
        useFactory: initializeApp,
        deps: [PrimeNGConfig],
      },
    ]);
  }