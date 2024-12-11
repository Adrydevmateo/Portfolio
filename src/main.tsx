import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Index from "@/Index";
import "@css/index.css";

const root = document.getElementById("root");
if (!root) throw new Error("No root element found");

createRoot(root).render(
  <StrictMode>
    <Index />
  </StrictMode>,
);
