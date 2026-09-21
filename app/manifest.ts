import type { MetadataRoute } from "next";
import { site } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "Semih Ş.",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0d0d0f",
    theme_color: "#0d0d0f",
    lang: site.lang,
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}
