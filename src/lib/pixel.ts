// TikTok Pixel event helpers — safe no-ops when the pixel is not loaded
type TtqWindow = Window & {
	ttq?: {
		track: (event: string, data?: Record<string, unknown>) => void
	}
}

export function trackCheckout() {
	if (typeof window === "undefined") return
	const w = window as TtqWindow
	if (w.ttq && typeof w.ttq.track === "function") {
		w.ttq.track("InitiateCheckout")
		w.ttq.track("ClickButton")
	}
}
