import { GoogleOAuthProvider } from "@react-oauth/google";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

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
