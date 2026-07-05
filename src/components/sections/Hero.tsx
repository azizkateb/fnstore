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
			className="relative min-h-[100svh] overflow-hidden md:h-[92vh] md:min-h-[760px]"
		>
			<motion.div
				variants={heroMedia}
				initial="hidden"
				animate="show"
				className="absolute inset-0 z-0"
			>
				<div className="h-full w-full animate-kenburns motion-reduce:animate-none">
					<Image
						src="/images/hero.png"
						alt={SITE.productName}
						fill
						priority
						className="object-cover object-[58%_center] md:object-[50%_center]"
					/>
				</div>
			</motion.div>

			<div className="absolute inset-0 z-10 bg-black/30" />
			<div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_70%_62%,rgba(0,0,0,0.58)_0%,rgba(0,0,0,0.36)_34%,rgba(0,0,0,0.12)_62%,transparent_100%)] md:hidden" />

			{/* Mobile: strong glass card. Desktop: clean editorial text block on the right side (RTL = start). */}
			<div className="absolute inset-x-5 bottom-10 z-30 max-w-[430px] rounded-[28px] bg-black/38 p-5 text-right shadow-[0_24px_60px_rgba(0,0,0,0.28)] backdrop-blur-[6px] ring-1 ring-white/15 md:bottom-auto md:inset-x-auto md:start-[7vw] md:top-1/2 md:w-[min(50vw,860px)] md:max-w-none md:-translate-y-1/2 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-0 md:ring-0">
				<AnimatedSplitText
					as="p"
					text="تشكيلة السهرات الجديدة"
					delay={0.35}
					stagger={0.09}
					duration={0.75}
					y={24}
					className="mb-5 inline-block rounded-full bg-white/95 px-3.5 py-1.5 text-[12px] font-semibold tracking-[0.14em] text-ink shadow-[0_4px_14px_rgba(0,0,0,0.16)] md:mb-12 md:rounded-sm md:px-4 md:py-2 md:text-[16px] md:tracking-[0.18em] md:shadow-[0_2px_12px_rgba(0,0,0,0.16)]"
				/>

				<AnimatedSplitText
					as="h1"
					text="أناقة تليق بمناسبتك"
					delay={0.55}
					stagger={0.075}
					duration={0.85}
					y={36}
					className="font-display mobile-title-lift max-w-[9ch] text-[clamp(34px,11vw,56px)] font-medium leading-[1.16] text-white md:max-w-[9.5ch] md:text-[clamp(72px,7vw,120px)] md:font-semibold md:leading-[1.02]"
				/>

				<motion.div
					variants={fadeUp}
					custom={0.8}
					initial="hidden"
					animate="show"
					className="relative mt-7 md:mt-12"
				>
					<div className="flex flex-wrap items-end gap-x-4 gap-y-3 md:gap-x-7 md:gap-y-4">
						<span className="text-4xl font-semibold text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.22)] md:text-7xl">
							<span className="font-symbol">{SITE.priceNow}</span>
							<span className="text-base md:text-2xl"> {SITE.currency}</span>
						</span>
						<span className="text-lg text-white/75 line-through drop-shadow-[0_2px_8px_rgba(0,0,0,0.18)] md:text-3xl">
							<span className="font-symbol">{SITE.priceOld}</span> {SITE.currency}
						</span>
						<span className="inline-flex rounded-full bg-gradient-to-r from-[#a8894e] via-[#d3b87b] to-[#f0dc9a] px-3.5 py-2 text-xs font-bold tracking-[0.18em] text-white shadow-[0_12px_28px_rgba(0,0,0,0.18)] ring-1 ring-white/15 md:px-5 md:py-3 md:text-lg">
							{SITE.discountText}{" "}
							<span className="symbol-safe" dir="ltr">{SITE.discountValue}</span>
						</span>
					</div>
				</motion.div>

				<motion.div
					variants={fadeUp}
					custom={0.95}
					initial="hidden"
					animate="show"
					className="mt-7 flex items-center gap-4 md:mt-10 md:gap-6"
				>
					<CircleCta href={SITE.sallaProductUrl} />
					<p className="max-w-[260px] text-sm leading-6 text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.22)] md:max-w-[420px] md:text-xl md:leading-8">
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
