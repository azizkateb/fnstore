"use client"

// Navbar behavior: hide on scroll-down (past 80px), show on scroll-up
// Ignores scroll events triggered by layout shifts (e.g. FAQ accordion expand/collapse)
import { useEffect, useRef, useState } from "react"
import { isNavbarScrollLocked } from "@/lib/layoutInteraction"

export function useHideOnScroll() {
	const [hidden, setHidden] = useState(false)
	const lastY = useRef(0)
	const ticking = useRef(false)

	useEffect(() => {
		lastY.current = window.scrollY
		const onScroll = () => {
			if (ticking.current) return
			ticking.current = true
			requestAnimationFrame(() => {
				const y = window.scrollY
				const delta = y - lastY.current

				// Ignore scroll events caused by layout expansion (FAQ, etc.)
				if (isNavbarScrollLocked()) {
					lastY.current = y
					ticking.current = false
					return
				}

				// Ignore tiny shifts from layout reflow
				if (Math.abs(delta) < 8) {
					ticking.current = false
					return
				}

				// Always show near top
				if (y < 80) {
					setHidden(false)
					lastY.current = y
					ticking.current = false
					return
				}

				setHidden(delta > 0)
				lastY.current = y
				ticking.current = false
			})
		}
		window.addEventListener("scroll", onScroll, { passive: true })
		return () => window.removeEventListener("scroll", onScroll)
	}, [])

	return hidden
}
