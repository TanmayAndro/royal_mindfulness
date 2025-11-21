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
    <GoogleOAuthProvider clientId="301174900317-1r7l9pq865eh2gsq5m02ugcnaspjpsld.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </>
);

reportWebVitals();
