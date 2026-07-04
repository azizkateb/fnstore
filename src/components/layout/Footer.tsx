"use client"

import { motion } from "framer-motion"
import { SITE } from "@/lib/site"

const fadeUp = {
	hidden: { opacity: 0, y: 24 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
	}
}

const rise = {
	hidden: { y: "100%" },
	show: {
		y: 0,
		transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] }
	}
}

const viewportOnce = { once: true, amount: 0.3 }

const footerLinks = [
	{ href: "#features", label: "المميزات" },
	{ href: "#gallery", label: "المعرض" },
	{ href: "#offer", label: "العرض" },
	{ href: "#faq", label: "الأسئلة" }
]

const trustItems = [
	{ icon: "🔒", text: "دفع آمن 100%" },
	{ icon: "🚚", text: "توصيل سريع" },
	{ icon: "💬", text: "دعم ومتابعة" }
]

export default function Footer() {
	return (
		<footer className="relative overflow-hidden bg-ink pt-20 text-white md:pt-24">
			<div className="mx-auto max-w-shell px-6">
				<motion.div
					viewport={viewportOnce}
					variants={fadeUp}
					initial="hidden"
					whileInView="show"
					className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start"
				>
					<div className="text-right">
						<p className="eyebrow !text-gold/80">{SITE.brandLatin}</p>
						<h2 className="font-display mt-5 text-[clamp(28px,4.2vw,56px)] font-bold leading-[1.08] text-ivory">
							إطلالتك المميزة تبدأ من هنا
						</h2>
						<p className="mt-5 text-base leading-7 text-white/65 md:text-lg">
							{SITE.productName} — خصم 15% لفترة محدودة مع تجربة شراء راقية، صفحة سريعة،
							وفيديو استعراضي يوضّح التفاصيل قبل الطلب.
						</p>
					</div>

					<div className="flex flex-col items-start gap-8 md:items-end">
						<a
							href={SITE.sallaProductUrl}
							className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-b from-gold to-[#B8945F] px-10 text-[13px] font-medium tracking-caps text-ink shadow-[0_4px_16px_rgba(168,137,78,0.25)] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
						>
							اطلبيه الآن
						</a>
						<div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/50">
						{trustItems.map((item) => (
								<span key={item.text} className="flex items-center gap-2">
									{item.icon} {item.text}
								</span>
							))}
						</div>
					</div>
				</motion.div>
			</div>

			<div className="overflow-hidden py-8 md:py-12">
				<motion.h2
					variants={rise}
					initial="hidden"
					whileInView="show"
					viewport={viewportOnce}
					className="font-display select-none text-center text-[16vw] font-bold leading-none tracking-tighter text-white/[0.04] md:text-[14vw]"
				>
					{SITE.brandLatin}
				</motion.h2>
			</div>

			<div className="mx-auto max-w-shell flex flex-col gap-5 border-t border-white/5 px-6 py-6 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
				<nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
					{footerLinks.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="text-white/55 transition-all duration-200 hover:text-gold hover:text-white"
						>
							{link.label}
						</a>
					))}
				</nav>
				<div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs md:text-sm">
					<span className="text-white/40">© 2026 {SITE.brand}</span>
					<a
						href={SITE.storeUrl}
						className="text-white/55 transition-all duration-200 hover:text-gold hover:text-white"
					>
						زوري المتجر الكامل
					</a>
				</div>
			</div>
		</footer>
	)
}