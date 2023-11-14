import ReactDOM from "react-dom/client";
import App from "./App.js";

addEventListener("DOMContentLoaded", (event) => {
  let appNode = document.getElementById("wpedeclogbook-admin-app");
  const root = ReactDOM.createRoot(appNode);
  root.render(<App />);
});
