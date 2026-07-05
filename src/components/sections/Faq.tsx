"use client"

import { useEffect, useRef, useState } from "react"
import { motion, type Variants, type Transition } from "framer-motion"
import AnimatedSplitText from "@/components/ui/AnimatedSplitText"
import Reveal from "@/components/ui/Reveal"
import { lockLayoutAnimations, lockNavbarScroll } from "@/lib/layoutInteraction"
import { luxEase } from "@/lib/motion"

const faqs = [
	{
		q: "كيف أطلب الفستان؟",
		a: "اضغطي زر «اطلبيه الآن» وستنتقلين مباشرة لصفحة الدفع الآمنة في متجر بوتيك FN على منصة سلة."
	},
	{
		q: "ما المقاسات المتوفرة؟",
		a: "تتوفر عدة مقاسات — تجدين جدول المقاسات الكامل في صفحة الطلب."
	},
	{
		q: "كم مدة التوصيل؟",
		a: "يتم شحن الطلبات بسرعة لجميع المدن، وتصلك تفاصيل التتبع فور الشحن."
	}
]

const accordionEase = [0.22, 1, 0.36, 1] as const

const plusVariants: Variants = {
	closed: { rotate: 0 },
	open: { rotate: 45 }
}

const plusTransition: Transition = {
	duration: 0.35,
	ease: accordionEase
}

const panelTransition: Transition = {
	duration: 0.5,
	ease: accordionEase
}

const opacityTransition: Transition = {
	duration: 0.28,
	ease: luxEase
}

type FaqItemProps = {
	faq: (typeof faqs)[number]
	isOpen: boolean
	onToggle: () => void
}

function FaqItem({ faq, isOpen, onToggle }: FaqItemProps) {
	const contentRef = useRef<HTMLDivElement>(null)
	const [contentHeight, setContentHeight] = useState(0)

	useEffect(() => {
		if (!contentRef.current) return
		setContentHeight(contentRef.current.scrollHeight)
	}, [faq.a])

	useEffect(() => {
		if (!contentRef.current) return
		if (isOpen) setContentHeight(contentRef.current.scrollHeight)
	}, [isOpen])

	const panelVariants: Variants = {
		closed: {
			height: 0,
			opacity: 0
		},
		open: {
			height: contentHeight,
			opacity: 1
		}
	}

	const panelState = isOpen ? "open" : "closed"

	return (
		<div className="border-b border-line">
			<button
				type="button"
				onClick={onToggle}
				className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-start"
				aria-expanded={isOpen}
			>
				<span className="text-3xl font-medium leading-tight md:text-5xl">
					{faq.q}
				</span>

				<motion.span
					variants={plusVariants}
					animate={panelState}
					transition={plusTransition}
					className="inline-flex shrink-0 items-center justify-center text-gold"
					aria-hidden
				>
					<svg
						viewBox="0 0 24 24"
						className="h-8 w-8 md:h-12 md:w-12"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
					>
						<path d="M12 5v14" />
						<path d="M5 12h14" />
					</svg>
				</motion.span>
			</button>

			<motion.div
				initial={false}
				variants={panelVariants}
				animate={panelState}
				transition={panelTransition}
				className="overflow-hidden"
			>
				<motion.div transition={opacityTransition}>
					<div ref={contentRef}>
						<p className="pb-8 text-xl leading-relaxed text-muted md:text-3xl">
							{faq.a}
						</p>
					</div>
				</motion.div>
			</motion.div>
		</div>
	)
}

export default function Faq() {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	function handleToggle(index: number) {
		lockNavbarScroll(650)
		lockLayoutAnimations(800)
		setOpenIndex((current) => (current === index ? null : index))
	}

	return (
		<section
			id="faq"
			className="flex min-h-screen flex-col justify-center px-6 py-28 md:px-20"
		>
			<div className="mb-16 text-center">
				<AnimatedSplitText
					as="p"
					text="أسئلة شائعة"
					y={30}
					duration={0.8}
					stagger={0.15}
					className="eyebrow text-base md:text-xl"
				/>
				<AnimatedSplitText
					as="h2"
					text="كل ما تحتاجين معرفته"
					delay={0.25}
					duration={1.2}
					stagger={0.09}
					className="font-display mt-6 text-[clamp(56px,9vw,140px)] font-bold leading-[0.95]"
				/>
			</div>

			<Reveal className="mx-auto w-full max-w-5xl">
				<div className="border-t border-line">
					{faqs.map((faq, index) => (
						<FaqItem
							key={faq.q}
							faq={faq}
							isOpen={openIndex === index}
							onToggle={() => handleToggle(index)}
						/>
					))}
				</div>
			</Reveal>
		</section>
	)
}
