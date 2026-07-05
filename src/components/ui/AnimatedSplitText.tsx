"use client"

import { useEffect, useMemo, useRef } from "react"
import {
	motion,
	useAnimationControls,
	useInView,
	useReducedMotion
} from "framer-motion"
import { luxEase } from "@/lib/motion"
import { areLayoutAnimationsLocked } from "@/lib/layoutInteraction"

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
	const wrapperRef = useRef<HTMLDivElement>(null)
	const controls = useAnimationControls()
	const isInView = useInView(wrapperRef, { amount: 0.25, once })
	const shouldReduceMotion = useReducedMotion()
	const hasPlayedRef = useRef(false)

	const words = useMemo(() => splitWords(text), [text])

	useEffect(() => {
		if (shouldReduceMotion) return
		if (areLayoutAnimationsLocked()) return
		if (isInView) {
			if (once && hasPlayedRef.current) return
			controls.start("show")
			hasPlayedRef.current = true
		}
	}, [isInView, controls, once, shouldReduceMotion])

	if (shouldReduceMotion) {
		return <Tag className={className}>{text}</Tag>
	}

	const MotionTag = motion(Tag)

	const container = {
		hidden: {},
		show: {
			transition: {
				delayChildren: delay,
				staggerChildren: stagger
			}
		}
	}

	const wordVariant = {
		hidden: { y: yOffset, opacity: 0, rotateX: 8 },
		show: {
			y: 0,
			opacity: 1,
			rotateX: 0,
			transition: { duration, ease: luxEase }
		}
	}

	return (
		<MotionTag
			ref={wrapperRef}
			className={className}
			variants={container}
			initial="hidden"
			animate={controls}
		>
			<span className="sr-only">{text}</span>
			<span aria-hidden>
				{words.flatMap((word, i) => [
					<motion.span
						key={`w-${i}`}
						variants={wordVariant}
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
