import * as React from "react";
import "./styles.css";
import LoginService from "./service/LoginService";
let loginService = new LoginService();

function store() {
  loginService.storeLoginToken("Shobana");
}

function get() {
  alert(loginService.isLoggedIn());
}

function remove() {
  loginService.removeLoginToken();
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={store}>Store</button>
      <button onClick={get}>Get</button>
      <button onClick={remove}>Remove</button>
    </div>
  );
}
