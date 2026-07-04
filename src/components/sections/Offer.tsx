"use client"

// Offer section — premium split layout with embedded promo video
import Reveal from "@/components/ui/Reveal"
import Button from "@/components/ui/Button"
import PhoneMockup from "@/components/ui/PhoneMockup"
import { SITE } from "@/lib/site"

export default function Offer() {
	return (
		<section id="offer" className="bg-chip py-24 text-white md:py-28">
			<div className="mx-auto grid max-w-shell items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
				<Reveal className="order-2 lg:order-1">
					<div className="max-w-[640px]">
						<p className="eyebrow !text-blush/80">عرض لفترة محدودة</p>
						<h2 className="font-display mt-4 text-[clamp(42px,5.5vw,76px)] font-bold leading-[1.08]">
							الكمية محدودة — <em className="italic text-blush">احجزي فستانك الآن</em>
						</h2>
						<p className="mt-6 max-w-[40rem] text-base leading-8 text-white/65 md:text-lg">
							شاهدي الفيديو السريع ثم انتقلي مباشرةً لصفحة الشراء الآمنة في سلة. نفس الفستان، نفس
							الخصم، وتجربة عرض أوضح لملمس القماش وحركة التصميم.
						</p>

						<div className="mt-10 flex flex-wrap items-end gap-x-6 gap-y-4 border-y border-white/10 py-6">
							<span className="font-display text-7xl font-bold leading-none md:text-8xl">
								{SITE.priceNow}
								<span className="text-2xl md:text-3xl"> {SITE.currency}</span>
							</span>
							<span className="text-2xl text-white/45 line-through md:text-3xl">
								{SITE.priceOld} {SITE.currency}
							</span>
							<span className="rounded-sm bg-gold px-3.5 py-1.5 text-[11px] font-medium tracking-caps text-white">
								{SITE.discountLabel}
							</span>
						</div>

						<div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
							<Button href={SITE.sallaProductUrl} className="!bg-white !text-ink hover:!bg-blush">
								اطلبيه الآن — الدفع الآمن عبر سلة
							</Button>
							<p className="max-w-[20rem] text-sm leading-7 text-white/55">
								🔒 دفع آمن 100% · 🚚 توصيل سريع لجميع المدن · 💬 دعم ومتابعة لطلبك
							</p>
						</div>
					</div>
				</Reveal>

				<Reveal delay={0.12} className="order-1 lg:order-2">
					<PhoneMockup>
						<video
							className="h-full w-full object-cover"
							src="/videos/dress-ad.mp4"
							autoPlay
							muted
							loop
							playsInline
							preload="metadata"
							disablePictureInPicture
							controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
							onContextMenu={(e) => e.preventDefault()}
						/>
					</PhoneMockup>
				</Reveal>
			</div>
		</section>
	)
}
