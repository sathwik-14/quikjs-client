import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations'
import { routes } from './app.routes';
  import { provideHttpClient } from '@angular/common/http';
import { provideAuth0 } from '@auth0/auth0-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    provideAuth0({
      domain: 'dev-1jlhy0mxgikhcqzn.us.auth0.com',
      clientId: 'v5kTJmwkoaaHNpJyCqEDj2PsboE4pnHB',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    })  
  ],
};
