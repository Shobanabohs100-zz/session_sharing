import CookiesService, { CookiesServiceInterface } from "./CookieService";

interface ILoginService {
  isLoggedIn(): boolean;
  storeLoginToken(token: string): void;
  removeLoginToken(): void;
}

const DOMAIN = ".neoufitness.com";
const TOKEN_COOKIE_NAME = "testCookie";

class LoginService implements ILoginService {
  storage: CookiesServiceInterface;
  constructor() {
    this.storage = new CookiesService();
  }
  isLoggedIn(): boolean {
    return !!this.storage.get(TOKEN_COOKIE_NAME);
  }
  storeLoginToken(token: string): void {
    this.storage.set(TOKEN_COOKIE_NAME, token, {
      domain: DOMAIN
    });
  }
  removeLoginToken(): void {
    this.storage.remove(TOKEN_COOKIE_NAME, {
      domain: DOMAIN
    });
  }
}

export default LoginService;
