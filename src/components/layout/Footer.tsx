"use client"

import { motion } from "framer-motion"
import { SITE } from "@/lib/site"
import AnimatedSplitText from "@/components/ui/AnimatedSplitText"

const fadeUp = {
	hidden: { opacity: 0, y: 24 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
	}
}

const rise = {
	hidden: { opacity: 0, y: 40 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] }
	}
}

const viewportOnce = { once: true, amount: 0.3 }

const links = [
	{ href: "#features", label: "المميزات" },
	{ href: "#gallery", label: "المعرض" },
	{ href: "#offer", label: "العرض" },
	{ href: "#faq", label: "الأسئلة" }
]

export default function Footer() {
	return (
		<footer className="overflow-hidden bg-ink pt-14 text-white md:pt-18">
			<div className="mx-auto max-w-shell px-6">
				<motion.div
					viewport={viewportOnce}
					variants={fadeUp}
					initial="hidden"
					whileInView="show"
					className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.15fr_0.85fr] md:items-end md:gap-12 md:pb-12"
				>
					<div className="text-right">
						<p className="eyebrow !text-blush/80">{SITE.brandLatin}</p>
						<AnimatedSplitText
							as="h2"
							text="إطلالتك المميزة تبدأ من هنا"
							delay={0.15}
							stagger={0.09}
							className="font-display mt-4 text-[clamp(36px,4.8vw,72px)] font-bold leading-[1.04]"
							wordClassName="text-white"
						/>
						<p className="mt-5 max-w-[46rem] text-base leading-8 text-white/62 md:text-lg">
							{SITE.productName} — خصم <span className="symbol-safe" dir="ltr">15%</span> لفترة محدودة مع تجربة شراء راقية، صفحة سريعة،
							وفيديو استعراضي يوضّح التفاصيل قبل الطلب.
						</p>
					</div>

					<div className="flex flex-col items-start gap-5 md:items-end md:gap-6">
						<a
							href={SITE.sallaProductUrl}
							className="inline-flex h-12 w-full items-center justify-center rounded-full bg-white px-8 text-[13px] font-medium tracking-caps text-ink transition-all duration-200 hover:bg-blush sm:w-auto"
						>
							اطلبيه الآن
						</a>
						<div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/55 md:justify-end">
							<span>🔒 دفع آمن <span className="symbol-safe" dir="ltr">100%</span></span>
							<span>🚚 توصيل سريع</span>
							<span>💬 دعم ومتابعة</span>
						</div>
					</div>
				</motion.div>
			</div>

			<div className="relative overflow-hidden border-y border-white/10 py-8 md:py-10">
				<motion.h2
					variants={rise}
					initial="hidden"
					whileInView="show"
					viewport={viewportOnce}
					className="font-display select-none text-center text-[10vw] font-bold leading-[0.9] tracking-tight text-white/[0.10] md:text-[9vw]"
				>
					{SITE.brandLatin}
				</motion.h2>
			</div>

			<div className="mx-auto flex max-w-shell flex-col gap-4 border-t border-white/10 px-6 py-5 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
				<nav className="flex flex-wrap items-center gap-x-7 gap-y-2">
					{links.map((link) => (
						<a key={link.href} href={link.href} className="transition-colors duration-200 hover:text-gold">
							{link.label}
						</a>
					))}
				</nav>
				<div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs md:text-sm">
					<span>© 2026 {SITE.brand}</span>
					<a href={SITE.storeUrl} className="transition-colors duration-200 hover:text-gold">
						زوري المتجر الكامل
					</a>
				</div>
			</div>
		</footer>
	)
}
