let navbarScrollLockedUntil = 0
let layoutLockedUntil = 0

export function lockNavbarScroll(ms = 450) {
	navbarScrollLockedUntil = Date.now() + ms
}

export function isNavbarScrollLocked() {
	return Date.now() < navbarScrollLockedUntil
}

export function lockLayoutAnimations(ms = 600) {
	layoutLockedUntil = Date.now() + ms
}

export function areLayoutAnimationsLocked() {
	return Date.now() < layoutLockedUntil
}
