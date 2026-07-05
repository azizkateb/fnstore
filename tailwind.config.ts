import type { Config } from "tailwindcss"

const config: Config = {
	content: ["./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				ivory: "#E9E6DE",
				surface: "#FFFFFF",
				ink: "#1C1B19",
				muted: "#6F6A5F",
				gold: "#A8894E",
				blush: "#E8C7B0",
				line: "#D8D4C9",
				chip: "#111111"
			},
			fontFamily: {
				display: ["var(--font-tajawal)", "system-ui", "sans-serif"],
				tajawal: ["var(--font-tajawal)", "system-ui", "sans-serif"],
				symbol: ["Arial", "Tahoma", "sans-serif"]
			},
			letterSpacing: {
				caps: "0.18em"
			},
			maxWidth: {
				shell: "1320px"
			},
			transitionTimingFunction: {
				lux: "cubic-bezier(0.22, 1, 0.36, 1)",
				expo: "cubic-bezier(0.16, 1, 0.3, 1)"
			},
			boxShadow: {
				nav: "0 2px 16px rgba(28,27,25,0.07)",
				card: "0 12px 32px rgba(28,27,25,0.10)"
			},
			keyframes: {
				marquee: {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(50%)" }
				},
				kenburns: {
					"0%": { transform: "scale(1)" },
					"100%": { transform: "scale(1.05)" }
				}
			},
			animation: {
				marquee: "marquee 36s linear infinite",
				kenburns: "kenburns 8s ease-in-out infinite alternate"
			}
		}
	},
	plugins: []
}

export default config
