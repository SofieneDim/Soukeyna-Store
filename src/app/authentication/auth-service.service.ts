import { Injectable } from '@angular/core';

const credentialsKey = 'connectedAdmin';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  private _credentials: any;

  /**
   * Gets the user credentials.
   * @return {Credentials} The user credentials or null if the user is not authenticated.
   */
  get credentials(): any {
    return this._credentials;
  }

  /**
   * Checks is the user is authenticated.
   * @return {boolean} True if the user is authenticated.
   */
  isAuthenticated(): boolean {
    return true;
  }

  /**
   * Sets the user credentials.
   * The credentials may be persisted across sessions by setting the `remember` parameter to true.
   * Otherwise, the credentials are only persisted for the current session.
   * @param {Credentials=} credentials The user credentials.
   * @param {boolean=} remember? True to remember credentials across sessions.
   */
  public setCredentials(credentials?: any, remember?: boolean) {}
}
