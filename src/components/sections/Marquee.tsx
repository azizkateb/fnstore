// Full-bleed dark promo marquee — infinite loop, pauses on hover
import { SITE } from "@/lib/site"

const items: React.ReactNode[] = [
	<>خصم <span className="symbol-safe" dir="ltr">15%</span> لفترة محدودة</>,
	<>{SITE.saveText} <span className="font-symbol" dir="ltr">{SITE.saveNumber}</span> {SITE.currency}</>,
	"توصيل سريع لجميع المدن",
	<>دفع آمن <span className="symbol-safe" dir="ltr">100%</span> عبر سلة</>
]

export default function Marquee() {
	const row = [...items, ...items, ...items, ...items]
	return (
		<div className="group overflow-hidden bg-chip py-4 text-white">
			<div className="flex w-max animate-marquee gap-16 text-[13px] font-medium tracking-caps group-hover:[animation-play-state:paused]">
				{row.map((t, i) => (
					<span key={i} className="flex items-center gap-16">
						{t}
						<b className="font-normal text-blush">✦</b>
					</span>
				))}
			</div>
		</div>
	)
}
