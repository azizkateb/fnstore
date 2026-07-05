"use client"

// Offer section — premium split layout with embedded promo video
import Reveal from "@/components/ui/Reveal"
import Button from "@/components/ui/Button"
import PhoneMockup from "@/components/ui/PhoneMockup"
import AnimatedSplitText from "@/components/ui/AnimatedSplitText"
import { SITE } from "@/lib/site"

export default function Offer() {
	return (
		<section id="offer" className="bg-chip py-16 text-white md:py-28">
			<div className="mx-auto grid max-w-shell items-center gap-8 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
				<Reveal className="order-2 lg:order-1">
					<div className="max-w-[640px]">
						<AnimatedSplitText
							as="p"
							text="عرض لفترة محدودة"
							y={30}
							duration={0.8}
							stagger={0.12}
							className="eyebrow !text-blush/80"
						/>
						<AnimatedSplitText
							as="h2"
							text="الكمية محدودة — احجزي فستانك الآن"
							stagger={0.1}
							className="font-display mt-4 text-[clamp(30px,5.5vw,76px)] font-bold leading-[1.08] md:text-[clamp(42px,5.5vw,76px)]"
						/>
						<AnimatedSplitText
							as="p"
							text="شاهدي الفيديو السريع ثم انتقلي مباشرةً لصفحة الشراء الآمنة في سلة. نفس الفستان، نفس الخصم، وتجربة عرض أوضح لملمس القماش وحركة التصميم."
							y={30}
							duration={1.0}
							stagger={0.06}
							className="mt-4 max-w-[40rem] text-sm leading-7 text-white/65 md:mt-6 md:text-lg"
						/>

						<div className="mt-8 flex flex-wrap items-end gap-x-4 gap-y-3 border-y border-white/10 py-5 md:mt-10 md:gap-x-6 md:py-6">
							<span className="text-5xl font-bold leading-none md:text-8xl">
								<span className="font-symbol">{SITE.priceNow}</span>
								<span className="text-lg md:text-3xl"> {SITE.currency}</span>
							</span>
							<span className="text-lg text-white/45 line-through md:text-3xl">
								<span className="font-symbol">{SITE.priceOld}</span> {SITE.currency}
							</span>
							<span className="rounded-sm bg-gold px-3.5 py-1.5 text-[11px] font-medium tracking-caps text-white">
								{SITE.discountText}{" "}
								<span className="symbol-safe" dir="ltr">{SITE.discountValue}</span>
							</span>
						</div>

						<div className="mt-6 flex flex-col items-start gap-4 md:mt-8 md:flex-row md:items-center md:gap-5">
							<Button href={SITE.sallaProductUrl} className="w-full !bg-white !text-ink hover:!bg-blush md:w-auto">
								اطلبيه الآن — الدفع الآمن عبر سلة
							</Button>
							<p className="max-w-[20rem] text-xs leading-6 text-white/55 md:text-sm md:leading-7">
								🔒 دفع آمن <span className="symbol-safe" dir="ltr">100%</span> · 🚚 توصيل سريع لجميع المدن · 💬 دعم ومتابعة لطلبك
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
