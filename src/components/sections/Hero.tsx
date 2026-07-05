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
				className="absolute inset-0"
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

			<div className="absolute inset-0 bg-black/30" />

			{/* Mobile layout: text near bottom. Desktop: strong block on the RIGHT side (RTL = start). */}
			<div className="absolute inset-x-6 bottom-14 max-w-[420px] md:bottom-auto md:inset-x-auto md:start-[7vw] md:top-1/2 md:w-[min(50vw,860px)] md:max-w-none md:-translate-y-1/2">
				<AnimatedSplitText
					as="p"
					text="تشكيلة السهرات الجديدة"
					delay={0.5}
					stagger={0.12}
					duration={0.8}
					y={30}
					className="mb-8 inline-block rounded-sm bg-white/90 px-3 py-1.5 text-[17px] font-semibold tracking-[0.22em] text-black shadow-[0_2px_12px_rgba(0,0,0,0.25)] md:mb-16 md:rounded md:bg-white/90 md:px-4 md:py-2 md:text-[22px] md:text-black md:shadow-[0_2px_12px_rgba(0,0,0,0.2)]"
				/>

			<AnimatedSplitText
				as="h1"
				text="أناقة تليق بمناسبتك"
				delay={0.65}
				stagger={0.09}
				y={60}
				className="font-display max-w-[8.5ch] text-[clamp(54px,17vw,86px)] font-semibold leading-[0.95] text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.25)] md:max-w-[9.5ch] md:text-[clamp(94px,8.8vw,160px)] md:leading-[0.98] md:text-white md:drop-shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
			/>

			<motion.div
				variants={fadeUp}
				custom={0.85}
				initial="hidden"
				animate="show"
				className="relative mt-10 md:mt-14"
			>
				<div className="flex flex-wrap items-end gap-x-5 gap-y-4">
					<span className="text-5xl font-bold text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.22)] md:text-7xl md:text-white md:drop-shadow-[0_4px_14px_rgba(0,0,0,0.22)]">
						<span className="font-symbol">{SITE.priceNow}</span>
						<span className="text-lg md:text-2xl"> {SITE.currency}</span>
					</span>
					<span className="text-2xl text-white/75 line-through drop-shadow-[0_2px_8px_rgba(0,0,0,0.18)] md:text-3xl md:text-white/75 md:drop-shadow-[0_2px_8px_rgba(0,0,0,0.18)]">
						<span className="font-symbol">{SITE.priceOld}</span> {SITE.currency}
					</span>
				</div>

				<span className="absolute right-[28rem] top-[70%] -translate-y-1/2 inline-flex rounded-full bg-gradient-to-r from-[#a8894e] via-[#d3b87b] to-[#f0dc9a] px-5 py-3 text-lg font-bold uppercase tracking-[0.24em] text-white shadow-[0_20px_40px_rgba(0,0,0,0.18)] ring-1 ring-white/15 md:right-[23rem] md:top-[65%] md:px-6 md:py-3.5 md:text-xl">
					{SITE.discountText}{" "}
					<span className="symbol-safe" dir="ltr">{SITE.discountValue}</span>
				</span>
			</motion.div>

				<motion.div
					variants={fadeUp}
					custom={1}
					initial="hidden"
					animate="show"
					className="mt-8 flex items-center gap-5 md:mt-12 md:gap-6"
				>
					<CircleCta href={SITE.sallaProductUrl} />
					<p className="max-w-[300px] text-lg leading-7 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)] md:max-w-[420px] md:text-xl md:leading-8 md:text-ink/85 md:drop-shadow-none">
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
