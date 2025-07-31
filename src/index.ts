import { serve } from "bun";
import index from "./index.html";
import getContent from "./backend/getContent";

// Get the hashes for the content so we can check them later.
const hashes = await Bun.file("./src/backend/content/hashes.json").json()

const server = serve({
  routes: {
    // Serve index.html for all routes.
    "/*": index,

    // API to recive the content of different
    "/content/:page": (req) => getContent(req.params.page, hashes)
  },

  development: process.env.NODE_ENV !== "production",
});

export type APITypes = {
  "/content/:page": string,
};

console.log(`🚀 Server running at ${server.url}`);
