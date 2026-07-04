"use client"

// Navbar behavior: hide on scroll-down (past 80px), show on scroll-up
import { useEffect, useState } from "react"

export function useHideOnScroll() {
	const [hidden, setHidden] = useState(false)

	useEffect(() => {
		let lastY = window.scrollY
		const onScroll = () => {
			const y = window.scrollY
			setHidden(y > lastY && y > 80)
			lastY = y
		}
		window.addEventListener("scroll", onScroll, { passive: true })
		return () => window.removeEventListener("scroll", onScroll)
	}, [])

	return hidden
}
