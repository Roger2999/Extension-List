import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ExtensionList } from "./ExtensionList.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ExtensionList />
  </StrictMode>
);
