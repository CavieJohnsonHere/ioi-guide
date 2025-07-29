import { createRoot } from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "react-query";

function start() {
  const root = createRoot(document.getElementById("root")!);
  const queryClient = new QueryClient();
  root.render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start);
} else {
  start();
}
