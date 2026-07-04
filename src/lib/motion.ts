// Motion tokens — mirrors the ModestWear motion design system
import type { Variants } from "framer-motion"

export const luxEase = [0.22, 1, 0.36, 1] as const
export const expoEase = [0.16, 1, 0.3, 1] as const

export const DUR = {
	fast: 0.2,
	medium: 0.5,
	slow: 0.9,
	hero: 1.4
}

export const STAGGER = {
	sm: 0.06,
	md: 0.1,
	lg: 0.14
}

// Standard fade-up reveal. Pass a delay via the `custom` prop.
export const fadeUp: Variants = {
	hidden: {
		opacity: 0,
		y: 40
	},
	show: (delay: number = 0) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			ease: luxEase,
			delay
		}
	})
}

// Container that staggers its children
export const staggerGrid: Variants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: STAGGER.md,
			delayChildren: 0.15
		}
	}
}

// Hero image settle (scale 1.08 -> 1)
export const heroMedia: Variants = {
	hidden: {
		opacity: 0,
		scale: 1.08
	},
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: DUR.hero,
			ease: expoEase,
			delay: 0.2
		}
	}
}

export const viewportOnce = {
	once: true,
	amount: 0.2
}
