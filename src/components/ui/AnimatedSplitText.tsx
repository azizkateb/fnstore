"use client"

import { useEffect, useMemo, useRef } from "react"
import {
	motion,
	useAnimationControls,
	useInView,
	useReducedMotion,
	type Variants,
	type Transition,
} from "framer-motion"
import { areLayoutAnimationsLocked } from "@/lib/layoutInteraction"
import { luxEase } from "@/lib/motion"
import type { CSSProperties } from "react"

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
	amount?: number
}

function splitWords(text: string) {
	if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
		try {
			const segmenter = new Intl.Segmenter("ar", { granularity: "word" })
			return Array.from(segmenter.segment(text))
				.map((segment) => segment.segment)
				.filter((word) => word.trim().length > 0)
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

const wordStyle: CSSProperties = {
	transformPerspective: 800,
	transformOrigin: "bottom center",
}

export default function AnimatedSplitText({
	text,
	as = "h2",
	className,
	wordClassName,
	delay = 0,
	stagger = 0.08,
	duration = 0.9,
	y = 50,
	once = true,
	amount = 0.22,
}: AnimatedSplitTextProps) {
	const Tag = getMotionTag(as)
	const ref = useRef<HTMLElement | null>(null)
	const controls = useAnimationControls()
	const isInView = useInView(ref, { amount, once })
	const shouldReduceMotion = useReducedMotion()
	const hasPlayedRef = useRef(false)
	const pendingRevealRef = useRef(false)

	const words = useMemo(() => splitWords(text), [text])

	useEffect(() => {
		if (shouldReduceMotion) return
		if (!isInView) return

		if (areLayoutAnimationsLocked()) {
			pendingRevealRef.current = true
			const timer = window.setTimeout(() => {
				if (pendingRevealRef.current && (!once || !hasPlayedRef.current)) {
					void controls.start("show")
					hasPlayedRef.current = true
				}
				pendingRevealRef.current = false
			}, 760)

			return () => window.clearTimeout(timer)
		}

		if (once && hasPlayedRef.current) return

		void controls.start("show")
		hasPlayedRef.current = true
	}, [isInView, controls, once, shouldReduceMotion])

	if (shouldReduceMotion) {
		return <Tag className={className}>{text}</Tag>
	}

	const container: Variants = {
		hidden: {},
		show: {
			transition: {
				delayChildren: delay,
				staggerChildren: stagger,
			},
		},
	}

	const wordTransition: Transition = {
		duration,
		ease: luxEase,
	}

	const wordVariant: Variants = {
		hidden: {
			y,
			opacity: 0,
			rotateX: 8,
		},
		show: {
			y: 0,
			opacity: 1,
			rotateX: 0,
			transition: wordTransition,
		},
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
			<span aria-hidden="true">
				{words.map((word, index) => (
					<span
						key={`${word}-${index}`}
						className="inline-block overflow-hidden align-baseline py-[0.14em] -my-[0.14em]"
					>
						<motion.span
							variants={wordVariant}
							className={`inline-block will-change-transform${wordClassName ? ` ${wordClassName}` : ""}`}
							style={wordStyle}
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
