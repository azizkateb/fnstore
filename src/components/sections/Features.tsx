"use client"

// Editorial numbered features — hairline rules, no cards
import { motion } from "framer-motion"
import { fadeUp, staggerGrid, viewportOnce } from "@/lib/motion"
import SectionTitle from "@/components/ui/SectionTitle"

const features = [
	{
		num: "01",
		title: "تصميم كاب أنيق",
		desc: "لمسة فخامة وجاذبية تميّز إطلالتك عن الجميع"
	},
	{
		num: "02",
		title: "قصّة انسيابية",
		desc: "طويلة ومريحة تناسب جميع القوامات"
	},
	{
		num: "03",
		title: "تفاصيل ناعمة",
		desc: "خامة راقية تعكس الرقي والبساطة"
	},
	{
		num: "04",
		title: "لكل المناسبات",
		desc: "مثالي للأعراس والسهرات والمناسبات الرسمية"
	}
]

export default function Features() {
	return (
		<section id="features" className="mx-auto max-w-shell px-6 py-28">
			<SectionTitle
				eyebrow="لماذا هذا الفستان"
				title={
					<span>
						تفاصيل صُنعت <em className="italic text-gold">لتُلفت الأنظار</em>
					</span>
				}
			/>
			<motion.div
				variants={staggerGrid}
				initial="hidden"
				whileInView="show"
				viewport={viewportOnce}
				className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4"
			>
				{features.map((f) => (
					<motion.div
						key={f.num}
						variants={fadeUp}
						className="border-t border-line pt-7"
					>
						<span className="font-display text-sm tracking-caps text-gold">
							{f.num}
						</span>
						<h3 className="font-display mb-3 mt-4 text-[28px] font-bold">{f.title}</h3>
						<p className="text-base leading-relaxed text-muted">{f.desc}</p>
					</motion.div>
				))}
			</motion.div>
		</section>
	)
}
