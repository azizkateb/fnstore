"use client"

// Circular arrow CTA — rotates -45deg and turns gold on hover
import { trackCheckout } from "@/lib/pixel"

type CircleCtaProps = {
	href: string
	label?: string
	className?: string
}

export default function CircleCta(props: CircleCtaProps) {
	const cls =
		"flex h-14 w-14 items-center justify-center rounded-full bg-ink text-white text-xl transition-all duration-300 ease-lux hover:-rotate-45 hover:bg-gold" +
		(props.className ? " " + props.className : "")
	return (
		<a
			href={props.href}
			aria-label={props.label ?? "اطلبيه الآن"}
			className={cls}
			onClick={trackCheckout}
		>
			←
		</a>
	)
}
