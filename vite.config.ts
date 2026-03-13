import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vike from "vike/plugin";

export default defineConfig(({ command }) => ({
  plugins: [react(), vike()],
  base:
    command === "build"
      ? (process.env.BASE_PATH ?? "/Meetup/")
      : "/",
}));
