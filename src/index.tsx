import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <GoogleOAuthProvider clientId="1075318005884-terq8titeaf9frr5lfu8c1g4qo1sia0p.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </>
);

reportWebVitals();
