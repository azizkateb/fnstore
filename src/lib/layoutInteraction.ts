let navbarScrollLockedUntil = 0

export function lockNavbarScroll(ms = 450) {
	navbarScrollLockedUntil = Date.now() + ms
}

export function isNavbarScrollLocked() {
	return Date.now() < navbarScrollLockedUntil
}
