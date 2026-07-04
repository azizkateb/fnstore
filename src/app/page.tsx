import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import StickyCta from "@/components/layout/StickyCta"
import Hero from "@/components/sections/Hero"
import Marquee from "@/components/sections/Marquee"
import Features from "@/components/sections/Features"
import Gallery from "@/components/sections/Gallery"
import Offer from "@/components/sections/Offer"
import Faq from "@/components/sections/Faq"

export default function Home() {
	return (
		<>
			<Navbar />
			<main>
				<Hero />
				<Marquee />
				<Features />
				<Gallery />
				<Offer />
				<Faq />
			</main>
			<Footer />
			<StickyCta />
		</>
	)
}
