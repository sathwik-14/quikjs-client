import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private oAuthService:OAuthService) {
    this.initConfiguration();
   }

  initConfiguration() {
    const authConf: AuthConfig = {
      // GitHub OAuth2 configuration
      loginUrl: 'https://github.com/login/oauth/authorize',
      redirectUri: environment.redirect_uri,
      responseType: 'code',
      clientId: environment.client_id, // Replace with your GitHub client ID
      scope: 'read:user user:email',
      dummyClientSecret: environment.client_secret, // Optional if your app requires it
      // oidc: false,
      showDebugInformation: true,
    };
    this.oAuthService.configure(authConf);
    this.oAuthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.oAuthService.initLoginFlow();
  }

  logout() {
    this.oAuthService.revokeTokenAndLogout();
    this.oAuthService.logOut();
  }

  getProfile() {
    this.oAuthService.getIdentityClaims();
  }

  getToken() {
    this.oAuthService.getAccessToken();
  }
}
