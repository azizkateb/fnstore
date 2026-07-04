"use client"

// Generic scroll-reveal wrapper (fade-up, fires once at 20% visibility)
import { motion } from "framer-motion"
import { fadeUp, viewportOnce } from "@/lib/motion"

type RevealProps = {
	children: React.ReactNode
	className?: string
	delay?: number
}

export default function Reveal(props: RevealProps) {
	return (
		<motion.div
			className={props.className}
			variants={fadeUp}
			custom={props.delay ?? 0}
			initial="hidden"
			whileInView="show"
			viewport={viewportOnce}
		>
			{props.children}
		</motion.div>
	)
}
