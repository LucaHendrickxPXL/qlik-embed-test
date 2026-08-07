import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        customer: resolve(__dirname, "customer.html"),
        product: resolve(__dirname, "product.html")
      }
    }
  }
});