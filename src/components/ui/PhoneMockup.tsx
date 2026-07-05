"use client"

import { motion, type Transition } from "framer-motion"

const phoneHover = {
	y: -8,
	scale: 1.015
}

const phoneTransition: Transition = {
	duration: 0.45,
	ease: [0.22, 1, 0.36, 1]
}

export default function PhoneMockup({ children }: { children: React.ReactNode }) {
	return (
		<motion.div
			className="relative mx-auto w-[min(88vw,320px)] sm:w-[480px]"
			whileHover={phoneHover}
			transition={phoneTransition}
		>
			{/* Premium shadow layers */}
			<div className="absolute -inset-x-4 inset-y-6 rounded-[48px] bg-black/40 blur-[28px]" />
			<div className="absolute -inset-x-8 inset-y-10 rounded-[56px] bg-gold/[0.05] blur-[56px]" />

			{/* Phone shell body */}
			<div className="relative rounded-[44px] bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-950 p-[8px] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_0_1px_rgba(255,255,255,0.03)]">
				{/* Edge highlight */}
				<div className="pointer-events-none absolute inset-[1px] rounded-[43px] shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]" />

				{/* Left side buttons */}
				<div className="absolute left-[-3px] top-[100px] h-[44px] w-[3px] rounded-r bg-gradient-to-b from-zinc-600 via-zinc-500 to-zinc-600 shadow-[inset_0_0_2px_rgba(0,0,0,0.5)]" />
				<div className="absolute left-[-3px] top-[152px] h-[52px] w-[3px] rounded-r bg-gradient-to-b from-zinc-600 via-zinc-500 to-zinc-600 shadow-[inset_0_0_2px_rgba(0,0,0,0.5)]" />
				<div className="absolute left-[-3px] top-[216px] h-[52px] w-[3px] rounded-r bg-gradient-to-b from-zinc-600 via-zinc-500 to-zinc-600 shadow-[inset_0_0_2px_rgba(0,0,0,0.5)]" />

				{/* Right side button */}
				<div className="absolute right-[-3px] top-[130px] h-[60px] w-[3px] rounded-l bg-gradient-to-b from-zinc-600 via-zinc-500 to-zinc-600 shadow-[inset_0_0_2px_rgba(0,0,0,0.5)]" />

				{/* Screen cavity */}
				<div className="relative overflow-hidden rounded-[36px] bg-black shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
					{/* Dynamic island notch */}
					<div className="absolute left-1/2 top-2.5 z-20 -translate-x-1/2">
						<div className="flex h-[24px] w-[108px] items-center justify-center gap-3 rounded-full bg-black shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
							<div className="h-[12px] w-[60px] rounded-full bg-zinc-950" />
							<div className="h-[4px] w-[4px] rounded-full bg-zinc-800" />
						</div>
					</div>

					{/* Home indicator */}
					<div className="absolute bottom-2 left-1/2 z-20 h-[4px] w-[28px] -translate-x-1/2 rounded-full bg-zinc-700/50" />

					{/* Subtle glass reflection */}
					<div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-white/[0.03] to-transparent" />

					{/* Content */}
					<div className="aspect-[9/16]">{children}</div>
				</div>
			</div>
		</motion.div>
	)
}
