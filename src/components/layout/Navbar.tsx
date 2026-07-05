"use client"

import { motion } from "framer-motion"
import { useHideOnScroll } from "@/hooks/useHideOnScroll"
import { SITE } from "@/lib/site"
import Button from "@/components/ui/Button"

const enter = {
	hidden: { opacity: 0, y: -18 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }
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
		"fixed inset-x-0 top-3 z-50 flex justify-center px-3 transition-transform duration-500 ease-lux md:top-6 md:px-5 " +
		(hidden ? "-translate-y-[140%]" : "translate-y-0")

	return (
		<div className={wrapCls}>
			<motion.header
				variants={enter}
				initial="hidden"
				animate="show"
				className="flex h-14 w-full max-w-[440px] items-center justify-between rounded-full bg-black/25 ps-5 pe-2.5 shadow-nav backdrop-blur-md ring-1 ring-white/10 md:h-24 md:max-w-[1440px] md:px-5 md:ps-12"
			>
				<a href="#top" className="group shrink-0 font-display text-xl font-bold tracking-wide text-white md:text-4xl">
					بوتيك <b className="font-symbol text-gold transition-colors duration-300 group-hover:text-white">FN</b>
				</a>

				<nav className="hidden items-center gap-12 text-lg font-medium text-white md:flex">
					{links.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="underline-sweep transition-colors duration-200 hover:text-gold"
						>
							{link.label}
						</a>
					))}
				</nav>

				<Button href={SITE.sallaProductUrl} size="sm" className="h-10 shrink-0 px-5 text-[11px] tracking-[0.08em] md:hidden">
					اطلبيه الآن
				</Button>
				<Button href={SITE.sallaProductUrl} size="md" className="hidden text-sm md:inline-flex md:text-base">
					اطلبيه الآن
				</Button>
			</motion.header>
		</div>
	)
}
