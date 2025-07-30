import { serve } from "bun";
import index from "./index.html";
import renderContent from "./backend/renderContent";

const server = serve({
  routes: {
    // Serve index.html for all routes.
    "/*": index,

    // API to recive the content of different
    "/content/:page": (req) => renderContent(req.params.page)
  },

  development: process.env.NODE_ENV !== "production",
});

console.log(`🚀 Server running at ${server.url}`);
