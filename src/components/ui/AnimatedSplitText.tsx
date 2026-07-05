"use client"

import { useEffect, useMemo, useRef } from "react"
import {
	motion,
	useAnimationControls,
	useInView,
	useReducedMotion
} from "framer-motion"
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

function getMotionTag(as: NonNullable<AnimatedSplitTextProps["as"]>) {
	switch (as) {
		case "h1":
			return motion.h1
		case "h2":
			return motion.h2
		case "h3":
			return motion.h3
		case "p":
			return motion.p
		case "span":
			return motion.span
		default:
			return motion.h2
	}
}

export default function AnimatedSplitText({
	text,
	as = "h2",
	className,
	wordClassName,
	delay = 0,
	stagger = 0.1,
	duration: animDuration = 1.2,
	y = 50,
	once = true
}: AnimatedSplitTextProps) {
	const Tag = getMotionTag(as)
	const ref = useRef<HTMLElement>(null)
	const controls = useAnimationControls()
	const isInView = useInView(ref, { amount: 0.15, once })
	const shouldReduceMotion = useReducedMotion()
	const hasPlayedRef = useRef(false)

	const words = useMemo(() => splitWords(text), [text])

	useEffect(() => {
		if (shouldReduceMotion) return
		if (isInView) {
			if (once && hasPlayedRef.current) return
			controls.start("show")
			hasPlayedRef.current = true
		}
	}, [isInView, controls, once, shouldReduceMotion])

	// Fail-safe: if useInView never fires, reveal after 1200ms
	useEffect(() => {
		if (shouldReduceMotion) return
		const timer = window.setTimeout(() => {
			if (!hasPlayedRef.current) {
				controls.start("show")
				hasPlayedRef.current = true
			}
		}, 1200)
		return () => window.clearTimeout(timer)
	}, [controls, shouldReduceMotion])

	if (shouldReduceMotion) {
		return <Tag className={className}>{text}</Tag>
	}

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
		hidden: { y, opacity: 0, rotateX: 8 },
		show: {
			y: 0,
			opacity: 1,
			rotateX: 0,
			transition: { duration: animDuration, ease: luxEase }
		}
	}

	return (
		<Tag
			ref={ref as any}
			className={className}
			variants={container}
			initial="hidden"
			animate={controls}
		>
			<span className="sr-only">{text}</span>
			<span aria-hidden>
				{words.map((word, index) => (
					<span
						key={`${word}-${index}`}
						className="inline-block overflow-hidden align-baseline"
					>
						<motion.span
							variants={wordVariant}
							className={`inline-block will-change-transform${wordClassName ? ` ${wordClassName}` : ""}`}
						>
							{word}
						</motion.span>
						{index < words.length - 1 ? " " : ""}
					</span>
				))}
			</span>
		</Tag>
	)
}
