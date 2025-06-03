import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { PostProvider } from "./components/context/postContext.jsx";

createRoot(document.getElementById("root")).render(
  <PostProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </PostProvider>
);
