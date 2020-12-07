import Cookies, { CookieGetOptions } from "universal-cookie";
import { CookieSetOptions } from "universal-cookie/cjs/types";

export interface CookiesServiceInterface {
  get(name: string, options?: CookieGetOptions | undefined): string;

  set(name: string, value: any, options?: CookieSetOptions): void;

  remove(name: string, options?: CookieSetOptions): void;
}

export default class CookiesService implements CookiesServiceInterface {
  private cookies: Cookies;

  constructor() {
    this.cookies = new Cookies();
    this.cookies.addChangeListener((data) => {
      alert(JSON.stringify(data, null, 2));
    });
  }

  public get(name: string, options?: CookieGetOptions | undefined): string {
    return this.cookies.get(name, options);
  }

  public set(name: string, value: string, options?: CookieSetOptions): void {
    this.cookies.set(name, value, { path: "/", ...options });
  }

  public remove(name: string, options?: CookieSetOptions): void {
    this.cookies.remove(name, { path: "/", ...options });
    this.getAll();
  }

  public getAll(): void {
    alert(JSON.stringify(this.cookies.getAll()));
  }
}
