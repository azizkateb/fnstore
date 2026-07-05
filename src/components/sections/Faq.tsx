"use client"

// FAQ — editorial accordions on hairline rules
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import AnimatedSplitText from "@/components/ui/AnimatedSplitText"
import Reveal from "@/components/ui/Reveal"
import { luxEase } from "@/lib/motion"
import { lockNavbarScroll } from "@/lib/layoutInteraction"

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

const accordionEase = [0.4, 0, 0.2, 1] as const

function FaqItem({
	faq,
	isOpen,
	onToggle
}: {
	faq: { q: string; a: string }
	isOpen: boolean
	onToggle: () => void
}) {
	const contentRef = useRef<HTMLDivElement>(null!)
	const [contentHeight, setContentHeight] = useState(0)

	useEffect(() => {
		if (contentRef.current) {
			setContentHeight(contentRef.current.scrollHeight)
		}
	}, [])

	useEffect(() => {
		if (!contentRef.current) return
		if (isOpen) {
			setContentHeight(contentRef.current.scrollHeight)
		}
	}, [isOpen])

	return (
		<div className="border-b border-line">
			<button
				type="button"
				onClick={onToggle}
				className="flex w-full cursor-pointer items-center justify-between py-6 text-start"
				aria-expanded={isOpen}
			>
				<AnimatedSplitText
					as="span"
					text={faq.q}
					y={30}
					duration={0.8}
					stagger={0.08}
					className="text-3xl font-medium md:text-5xl"
					once={false}
				/>
				<motion.span
					animate={{ rotate: isOpen ? 45 : 0 }}
					transition={{ duration: 0.4, ease: luxEase }}
					className="inline-flex items-center justify-center text-gold shrink-0"
					aria-hidden
				>
					<svg viewBox="0 0 24 24" className="h-8 w-8 md:h-12 md:w-12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
						<path d="M12 5v14" />
						<path d="M5 12h14" />
					</svg>
				</motion.span>
			</button>
			<motion.div
				initial={false}
				animate={{
					height: isOpen ? contentHeight : 0,
					opacity: isOpen ? 1 : 0
				}}
				transition={{
					height: { duration: 0.5, ease: accordionEase },
					opacity: {
						duration: isOpen ? 0.35 : 0.15,
						ease: luxEase,
						delay: isOpen ? 0.12 : 0
					}
				}}
				className="overflow-hidden"
			>
				<div ref={contentRef}>
					<p className="pb-8 text-xl leading-relaxed text-muted md:text-3xl">{faq.a}</p>
				</div>
			</motion.div>
		</div>
	)
}

export default function Faq() {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

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
					duration={1.4}
					className="font-display mt-6 text-[clamp(56px,9vw,140px)] font-bold leading-[0.95]"
				/>
			</div>
			<Reveal className="mx-auto w-full max-w-5xl">
				<div className="border-t border-line">
					{faqs.map((f, i) => (
						<FaqItem
							key={f.q}
							faq={f}
							isOpen={openIndex === i}
							onToggle={() => {
								lockNavbarScroll(600)
								setOpenIndex(openIndex === i ? null : i)
							}}
						/>
					))}
				</div>
			</Reveal>
		</section>
	)
}
