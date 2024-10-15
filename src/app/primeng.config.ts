import {
  APP_INITIALIZER,
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { definePreset } from 'primeng/themes';
import { Aura } from 'primeng/themes/aura';

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{purple.50}',
      100: '{purple.100}',
      200: '{purple.200}',
      300: '{purple.300}',
      400: '{purple.400}',
      500: '{purple.500}',
      600: '{purple.600}',
      700: '{purple.700}',
      800: '{purple.800}',
      900: '{purple.900}',
      950: '{purple.950}',
    },
  },
  components: {
    card: {
      colorScheme: {
        light: {
          root: {
            background: '{surface.0}',
            color: '{surface.700}',
            borderRadius: '5px',
            shadow: '0 0 0 1px rgba(0,0,0,0.2)',
          },
          subtitle: {
            color: '{surface.500}',
          },
        },
        dark: {
          root: {
            background: '{surface.900}',
            color: '{surface.0}',
            borderRadius: '5px',
            shadow: '0 0 0 1px rgba(255,255,255,0.2)',
          },
          subtitle: {
            color: '{surface.400}',
          },
        },
      },
    },
    button: {
      colorScheme: {
        light: {
          root: {
            borderRadius: '5px',
          },
        },
        dark: {},
      },
    },
  },
});

export function initializeApp(config: PrimeNGConfig) {
  return () => {
    config.ripple.set(true);
    config.theme.set({
      preset: MyPreset,
      options: {
        darkModeSelector: '.p-dark',
      }
    });
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
