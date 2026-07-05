"use client"

import { motion, useReducedMotion } from "framer-motion"
import { luxEase } from "@/lib/motion"

type AnimatedSplitTextProps = {
	text: string
	as?: "h1" | "h2" | "h3" | "p" | "span"
	className?: string
	wordClassName?: string
	delay?: number
	stagger?: number
	duration?: number
	y?: number
	once?: boolean
}

function splitWords(text: string) {
	if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
		try {
			const segmenter = new Intl.Segmenter("ar", { granularity: "word" })
			return Array.from(segmenter.segment(text))
				.map((s) => s.segment)
				.filter((s) => s.trim().length > 0)
		} catch {
			return text.trim().split(/\s+/)
		}
	}
	return text.trim().split(/\s+/)
}

const wordVariant = (y: number, duration: number) => ({
	hidden: { y, opacity: 0, rotateX: 8 },
	show: {
		y: 0,
		opacity: 1,
		rotateX: 0,
		transition: { duration, ease: luxEase }
	}
})

export default function AnimatedSplitText({
	text,
	as: Tag = "h2",
	className,
	wordClassName,
	delay = 0,
	stagger = 0.1,
	duration = 1.2,
	y: yOffset = 50,
	once = true
}: AnimatedSplitTextProps) {
	const shouldReduceMotion = useReducedMotion()
	const words = splitWords(text)
	const MotionTag = motion(Tag)

	if (shouldReduceMotion) {
		return <Tag className={className}>{text}</Tag>
	}

	return (
		<MotionTag
			className={className}
			variants={{
				hidden: {},
				show: {
					transition: {
						delayChildren: delay,
						staggerChildren: stagger
					}
				}
			}}
			initial="hidden"
			whileInView="show"
			viewport={{ once, amount: 0.35 }}
		>
			<span className="sr-only">{text}</span>
			<span aria-hidden>
				{words.flatMap((word, i) => [
					<motion.span
						key={`w-${i}`}
						variants={wordVariant(yOffset, duration)}
						className={`inline-block${wordClassName ? ` ${wordClassName}` : ""}`}
						style={{ willChange: "transform" }}
					>
						{word}
					</motion.span>,
					i < words.length - 1 ? (
						<span key={`s-${i}`} className="inline-block">
							{" "}
						</span>
					) : null
				])}
			</span>
		</MotionTag>
	)
}
