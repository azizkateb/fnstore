"use client"

import Image from "next/image"
import { motion, type Transition, type Variants } from "framer-motion"
import { fadeUp, staggerGrid, viewportOnce } from "@/lib/motion"
import SectionTitle from "@/components/ui/SectionTitle"

const cards = [
	{
		src: "/images/dress1.jpg",
		chip: "الأكثر طلبًا",
		label: "الإطلالة"
	},
	{
		src: "/images/dress3.jpg",
		chip: "تفاصيل القماش",
		label: "الخامة"
	},
	{
		src: "/images/dress4.jpg",
		chip: "تصميم الكاب",
		label: "القصّة"
	}
]

const arrowVariants: Variants = {
	initial: {
		opacity: 0,
		scale: 0.75
	},
	rest: {
		opacity: 0,
		scale: 0.75
	},
	hover: {
		opacity: 1,
		scale: 1
	}
}

const arrowTransition: Transition = {
	delay: 0.2,
	duration: 0.6,
	ease: [0.22, 1, 0.36, 1]
}

export default function Gallery() {
	return (
		<section id="gallery" className="w-full px-20 pb-32">
			<SectionTitle
				eyebrow="المعرض"
				animatedText="شاهديه من كل زاوية"
			/>
			<motion.div
				variants={staggerGrid}
				initial="hidden"
				whileInView="show"
				viewport={viewportOnce}
				className="grid grid-cols-1 gap-6 md:grid-cols-3"
			>
				{cards.map((card) => (
					<motion.figure
						key={card.src}
						variants={fadeUp}
						initial="rest"
						whileHover="hover"
						animate="rest"
						className="group relative aspect-[4/5] cursor-pointer overflow-hidden"
					>
						<Image
							src={card.src}
							alt={card.label}
							fill
							className="object-cover contrast-[1.08] saturate-[0.98] brightness-[0.88] transition-transform duration-[1400ms] ease-expo group-hover:scale-[1.08]"
						/>

						<div
							aria-hidden
							className="pointer-events-none absolute inset-0 bg-[#1C1B19]/[0.38] backdrop-saturate-[0.65] will-change-[clip-path] [clip-path:circle(0%_at_0%_100%)] transition-[clip-path] duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:[clip-path:circle(141%_at_0%_100%)] motion-reduce:[clip-path:none] motion-reduce:opacity-0 motion-reduce:transition-opacity motion-reduce:group-hover:opacity-100"
						/>

						<motion.span
							variants={arrowVariants}
							transition={arrowTransition}
							className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-2xl text-white"
							aria-hidden
						>
							←
						</motion.span>

						<span className="absolute start-4 top-4 rounded-sm bg-chip px-3 py-1.5 text-[11px] font-medium tracking-caps text-white">
							{card.chip}
						</span>
						<figcaption className="font-display absolute bottom-6 end-7 text-5xl font-bold text-white drop-shadow-md transition-transform duration-500 ease-lux group-hover:-translate-y-1.5">
							{card.label}
						</figcaption>
					</motion.figure>
				))}
			</motion.div>
		</section>
	)
}
