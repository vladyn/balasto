import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import { defineConfig, fontProviders } from "astro/config";
import emdash from "emdash/astro";
import { d1, r2, sandbox } from "@emdash-cms/cloudflare";

export default defineConfig({
	output: "server",
	adapter: cloudflare(),
	image: {
		layout: "constrained",
		responsiveStyles: true,
	},
	fonts: [
		{
			provider: fontProviders.google(),
			name: "Montserrat",
			cssVariable: "--font-display",
		},
		{
			provider: fontProviders.google(),
			name: "Inter",
			cssVariable: "--font-body",
		},
	],
	integrations: [
		react(),
		emdash({
			database: d1({ binding: "DB" }),
			storage: r2({ binding: "MEDIA" }),
			sandboxRunner: sandbox(),
		}),
	],
	devToolbar: { enabled: false },
});

