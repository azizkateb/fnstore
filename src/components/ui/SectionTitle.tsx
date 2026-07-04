// Centered editorial section head: eyebrow -> serif title (italic accent)
import Reveal from "@/components/ui/Reveal"

type SectionTitleProps = {
	eyebrow: string
	title: React.ReactNode
}

export default function SectionTitle(props: SectionTitleProps) {
	return (
		<Reveal className="mb-14 text-center">
			<p className="eyebrow">{props.eyebrow}</p>
			<h2 className="font-display mt-4 text-[clamp(38px,5vw,64px)] font-bold leading-tight">
				{props.title}
			</h2>
		</Reveal>
	)
}
