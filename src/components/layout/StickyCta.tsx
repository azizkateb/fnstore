"use client"

// Mobile-only sticky purchase bar — highest-converting element for TikTok traffic
import { SITE } from "@/lib/site"
import { trackCheckout } from "@/lib/pixel"

export default function StickyCta() {
	return (
		<div className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-between gap-4 border-t border-line bg-white/95 px-5 py-3 shadow-[0_-4px_16px_rgba(28,27,25,0.08)] backdrop-blur-md md:hidden">
			<div className="flex items-baseline gap-2">
				<span className="text-2xl font-bold">
					<span className="font-symbol">{SITE.priceNow}</span> {SITE.currency}
				</span>
				<span className="text-xs text-muted line-through">
					<span className="font-symbol">{SITE.priceOld}</span> {SITE.currency}
				</span>
			</div>
			<a
				href={SITE.sallaProductUrl}
				onClick={trackCheckout}
				className="rounded-full bg-ink px-7 py-3 text-[13px] font-medium tracking-caps text-white"
			>
				اطلبيه الآن
			</a>
		</div>
	)
}
