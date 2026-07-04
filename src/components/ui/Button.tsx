"use client"

import { trackCheckout } from "@/lib/pixel"

type ButtonProps = {
	href: string
	children: React.ReactNode
	variant?: "primary" | "ghost"
	size?: "md" | "sm"
	className?: string
}

const base =
	"inline-flex items-center justify-center gap-3 rounded-full font-medium tracking-caps text-[13px] transition-all duration-200 ease-lux"

const variants = {
	primary: "bg-ink text-white hover:bg-black hover:tracking-[0.22em]",
	ghost:
		"bg-transparent text-ink border border-line hover:border-gold hover:text-gold"
}

const sizes = {
	md: "h-12 px-9",
	sm: "h-10 px-6"
}

export default function Button(props: ButtonProps) {
	const variant = props.variant ?? "primary"
	const size = props.size ?? "md"
	const cls =
		base +
		" " +
		variants[variant] +
		" " +
		sizes[size] +
		(props.className ? " " + props.className : "")
	return (
		<a href={props.href} className={cls} onClick={trackCheckout}>
			{props.children}
		</a>
	)
}
