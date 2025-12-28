import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';

// Angular v21: зонлесс-режим можно включить через provideZonelessChangeDetection().
// См. официальную документацию Angular API.
import { provideZonelessChangeDetection } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideAnimations(),
  ],
};
