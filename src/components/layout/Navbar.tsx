"use client"

// Floating pill navbar — hides on scroll-down, shows on scroll-up
import { motion } from "framer-motion"
import { useHideOnScroll } from "@/hooks/useHideOnScroll"
import { SITE } from "@/lib/site"
import Button from "@/components/ui/Button"

const enter = {
	hidden: { opacity: 0, y: -24 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }
	}
}

const links = [
	{ href: "#features", label: "المميزات" },
	{ href: "#gallery", label: "المعرض" },
	{ href: "#offer", label: "العرض" },
	{ href: "#faq", label: "أسئلة" }
]

export default function Navbar() {
	const hidden = useHideOnScroll()
	const wrapCls =
		"fixed inset-x-0 top-6 z-50 flex justify-center transition-transform duration-500 ease-lux " +
		(hidden ? "-translate-y-[130%]" : "translate-y-0")
	return (
		<div className={wrapCls}>
			<motion.header
				variants={enter}
				initial="hidden"
				animate="show"
				className="flex h-24 w-[min(1440px,calc(100%-40px))] items-center justify-between rounded-full bg-white/80 ps-12 pe-5 shadow-nav backdrop-blur-lg"
			>
				<a href="#top" className="group font-display text-4xl font-bold tracking-wide">
					بوتيك <b className="text-gold transition-colors duration-300 group-hover:text-ink">FN</b>
				</a>
				<nav className="hidden items-center gap-12 text-lg font-medium md:flex">
					{links.map((l) => (
						<a
							key={l.href}
							href={l.href}
							className="underline-sweep transition-colors duration-200 hover:text-gold"
						>
							{l.label}
						</a>
					))}
				</nav>
				<Button href={SITE.sallaProductUrl} size="md" className="text-sm md:text-base">
					اطلبيه الآن
				</Button>
			</motion.header>
		</div>
	)
}
