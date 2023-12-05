import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <Auth0Provider
      domain={`${process.env.REACT_APP_AUTH0_DOMAIN}`}
      clientId={`${process.env.REACT_APP_AUTH0_CLIENT_ID}`}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </HashRouter>
);
