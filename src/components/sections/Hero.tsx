"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { fadeUp, heroMedia } from "@/lib/motion"
import { SITE } from "@/lib/site"
import CircleCta from "@/components/ui/CircleCta"
import AnimatedSplitText from "@/components/ui/AnimatedSplitText"

export default function Hero() {
	return (
		<section
			id="top"
			className="relative min-h-[100svh] w-full overflow-hidden md:h-[92vh] md:min-h-[760px]"
		>
			<motion.div
				variants={heroMedia}
				initial="hidden"
				animate="show"
				className="absolute inset-0 z-0"
			>
				<div className="h-full w-full animate-kenburns motion-reduce:animate-none">
					{/* Mobile-only hero image: portrait composition, cleaner and made for phones */}
					<Image
						src="/images/hero-mobile.jpg"
						alt={SITE.productName}
						fill
						priority
						className="object-cover object-center md:hidden"
					/>

					{/* Desktop/tablet hero image */}
					<Image
						src="/images/hero.png"
						alt={SITE.productName}
						fill
						priority
						className="hidden object-cover object-[50%_center] md:block"
					/>
				</div>
			</motion.div>

			{/* Mobile-only readability overlay, localized to lower text area */}
			<div className="absolute inset-0 z-10 bg-gradient-to-t from-black/62 via-black/22 to-transparent md:hidden" />
			<div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_72%,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.24)_36%,rgba(0,0,0,0.08)_62%,transparent_100%)] md:hidden" />
			<div className="absolute inset-0 z-10 hidden bg-black/20 md:block" />

			{/* Mobile: compact readable card. Desktop: editorial text block. */}
			<div className="absolute inset-x-4 bottom-10 z-30 max-w-[430px] rounded-[28px] bg-black/34 p-5 text-right shadow-[0_24px_60px_rgba(0,0,0,0.26)] backdrop-blur-[5px] ring-1 ring-white/15 md:bottom-auto md:inset-x-auto md:start-[7vw] md:top-1/2 md:w-[min(50vw,860px)] md:max-w-none md:-translate-y-1/2 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-0 md:ring-0">
				<AnimatedSplitText
					as="p"
					text="تشكيلة السهرات الجديدة"
					immediate
					delay={0.3}
					stagger={0.08}
					duration={0.75}
					y={22}
					className="mb-5 inline-block rounded-full bg-white/95 px-3.5 py-1.5 text-[12px] font-semibold tracking-[0.12em] text-ink shadow-[0_4px_14px_rgba(0,0,0,0.16)] md:mb-12 md:rounded-sm md:px-4 md:py-2 md:text-[18px] md:tracking-[0.18em]"
				/>

				<h1 className="font-ui mobile-title-lift max-w-[10ch] text-[clamp(34px,10vw,48px)] font-bold leading-[1.25] text-white md:hidden">
					أناقة تليق بمناسبتك
				</h1>
				<AnimatedSplitText
					as="h1"
					text="أناقة تليق بمناسبتك"
					immediate
					delay={0.5}
					stagger={0.07}
					duration={0.85}
					y={32}
					className="hidden md:block md:font-display md:max-w-[9.5ch] md:text-[clamp(84px,7.6vw,138px)] md:font-semibold md:leading-[1.04] md:text-white"
				/>

				<motion.div
					variants={fadeUp}
					custom={0.78}
					initial="hidden"
					animate="show"
					className="mt-6 md:mt-12"
				>
					<div className="flex flex-wrap items-end gap-x-4 gap-y-3 md:gap-x-7 md:gap-y-4">
						<span className="text-4xl font-semibold text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.22)] md:text-7xl">
							<span className="font-symbol">{SITE.priceNow}</span>
							<span className="text-base md:text-2xl"> {SITE.currency}</span>
						</span>
						<span className="text-lg text-white/75 line-through drop-shadow-[0_2px_8px_rgba(0,0,0,0.18)] md:text-3xl">
							<span className="font-symbol">{SITE.priceOld}</span> {SITE.currency}
						</span>
						<span className="inline-flex rounded-full bg-gradient-to-r from-[#a8894e] via-[#d3b87b] to-[#f0dc9a] px-3.5 py-2 text-xs font-bold tracking-[0.14em] text-white shadow-[0_12px_28px_rgba(0,0,0,0.18)] ring-1 ring-white/15 md:px-5 md:py-3 md:text-lg">
							{SITE.discountText}{" "}
							<span className="symbol-safe" dir="ltr">{SITE.discountValue}</span>
						</span>
					</div>
				</motion.div>

				<motion.div
					variants={fadeUp}
					custom={0.92}
					initial="hidden"
					animate="show"
					className="mt-6 flex items-center gap-4 md:mt-10 md:gap-6"
				>
					<CircleCta href={SITE.sallaProductUrl} />
					<p className="max-w-[250px] text-sm leading-6 text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.22)] md:max-w-[420px] md:text-xl md:leading-8">
						{SITE.saveText}{" "}
						<span className="font-symbol" dir="ltr">{SITE.saveNumber}</span>{" "}
						{SITE.currency} — دفع آمن{" "}
						<span className="symbol-safe" dir="ltr">100%</span> عبر منصة سلة
					</p>
				</motion.div>
			</div>
		</section>
	)
}
