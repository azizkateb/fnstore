// Centered editorial section head: eyebrow -> serif title (italic accent)
import Reveal from "@/components/ui/Reveal"
import AnimatedSplitText from "@/components/ui/AnimatedSplitText"

type SectionTitleProps = {
	eyebrow: string
	title?: React.ReactNode
	animatedText?: string
}

export default function SectionTitle(props: SectionTitleProps) {
	if (props.animatedText) {
		return (
			<div className="mb-14 text-center">
				<p className="eyebrow">{props.eyebrow}</p>
				<AnimatedSplitText
					as="h2"
					text={props.animatedText}
					className="font-display mt-4 text-[clamp(38px,5vw,64px)] font-bold leading-tight"
				/>
			</div>
		)
	}

	return (
		<Reveal className="mb-14 text-center">
			<p className="eyebrow">{props.eyebrow}</p>
			<h2 className="font-display mt-4 text-[clamp(38px,5vw,64px)] font-bold leading-tight">
				{props.title}
			</h2>
		</Reveal>
	)
}
