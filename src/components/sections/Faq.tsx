"use client"

// FAQ — editorial accordions on hairline rules
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Reveal from "@/components/ui/Reveal"
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

function FaqItem({
	faq,
	isOpen,
	onToggle
}: {
	faq: { q: string; a: string }
	isOpen: boolean
	onToggle: () => void
}) {
	return (
		<div className="border-b border-line">
			<button
				type="button"
				onClick={onToggle}
				className="flex w-full cursor-pointer items-center justify-between py-6 text-start"
				aria-expanded={isOpen}
			>
				<span className="text-3xl font-medium md:text-5xl">{faq.q}</span>
				<motion.span
					animate={{ rotate: isOpen ? 45 : 0 }}
					transition={{ duration: 0.4, ease: luxEase }}
					className="text-gold text-4xl md:text-6xl"
				>
					+
				</motion.span>
			</button>
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						key="content"
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.5, ease: luxEase }}
						className="overflow-hidden"
					>
						<p className="pb-8 text-xl leading-relaxed text-muted md:text-3xl">{faq.a}</p>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default function Faq() {
	const [openIndex, setOpenIndex] = useState<number | null>(0)

	return (
		<section
			id="faq"
			className="flex min-h-screen flex-col justify-center px-6 py-28 md:px-20"
		>
			<Reveal className="mb-16 text-center">
				<p className="eyebrow text-base md:text-xl">أسئلة شائعة</p>
				<h2 className="font-display mt-6 text-[clamp(56px,9vw,140px)] font-bold leading-[0.95]">
					كل ما تحتاجين <em className="italic text-gold">معرفته</em>
				</h2>
			</Reveal>
			<Reveal className="mx-auto w-full max-w-5xl">
				<div className="border-t border-line">
					{faqs.map((f, i) => (
						<FaqItem
							key={f.q}
							faq={f}
							isOpen={openIndex === i}
							onToggle={() => setOpenIndex(openIndex === i ? null : i)}
						/>
					))}
				</div>
			</Reveal>
		</section>
	)
}
