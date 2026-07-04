"use client"

// Full-bleed editorial hero: Ken Burns media + staged text reveal
import Image from "next/image"
import { motion } from "framer-motion"
import { fadeUp, heroMedia } from "@/lib/motion"
import { SITE } from "@/lib/site"
import CircleCta from "@/components/ui/CircleCta"

export default function Hero() {
	return (
		<section
			id="top"
			className="relative h-[100vh] min-h-[680px] overflow-hidden motion-reduce:h-auto motion-reduce:min-h-0"
		>
			<motion.div
				variants={heroMedia}
				initial="hidden"
				animate="show"
				className="absolute inset-0 motion-reduce:animate-none"
			>
				<div className="h-full w-full animate-kenburns motion-reduce:animate-none">
					<Image
						src="/images/hero.png"
						alt={SITE.productName}
						fill
						priority
						className="object-cover object-center"
					/>
				</div>
			</motion.div>

			{/* Dark gradient scrim — deepens the right side for text readability without desaturating the image */}
			<div className="absolute inset-0 bg-gradient-to-l from-ink/60 via-ink/20 to-transparent" />

			<div className="absolute top-[45%] start-[8vw] max-w-[650px] -translate-y-1/2">
				<motion.p
					variants={fadeUp}
					custom={0.5}
					initial="hidden"
					animate="show"
					className="text-lg font-bold tracking-[0.28em] text-gold drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)] md:text-2xl"
				>
					تشكيلة السهرات الجديدة
				</motion.p>
				<motion.h1
					variants={fadeUp}
					custom={0.65}
					initial="hidden"
					animate="show"
					className="font-display mt-16 mb-8 text-[clamp(68px,10vw,150px)] font-bold leading-[0.95] tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.18)]"
				>
					أناقة تليق بمناسبتك
				</motion.h1>
				<motion.div
					variants={fadeUp}
					custom={0.85}
					initial="hidden"
					animate="show"
					className="mb-10 flex items-center gap-5"
				>
					<span className="font-display text-7xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)] md:text-8xl">
						{SITE.priceNow}
						<span className="text-xl md:text-2xl"> {SITE.currency}</span>
					</span>
					<span className="text-2xl text-white/50 line-through drop-shadow-[0_1px_4px_rgba(0,0,0,0.15)] md:text-3xl">
						{SITE.priceOld} {SITE.currency}
					</span>
					<span className="rounded-sm bg-gold px-4 py-2 text-xs font-bold tracking-caps text-ink shadow-lg md:text-sm">
						{SITE.discountLabel}
					</span>
				</motion.div>
				<motion.div
					variants={fadeUp}
					custom={1}
					initial="hidden"
					animate="show"
					className="flex items-center gap-6"
				>
					<CircleCta href={SITE.sallaProductUrl} />
					<p className="max-w-[260px] text-sm font-medium leading-relaxed text-white/80 drop-shadow-[0_1px_4px_rgba(0,0,0,0.2)] md:text-base">
						{SITE.saveLabel} — دفع آمن 100% عبر منصة سلة
					</p>
				</motion.div>
			</div>
		</section>
	)
}
