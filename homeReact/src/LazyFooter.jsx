import { useEffect, useRef, useState } from 'react'

export default function LazyFooter() {
	const footerRef = useRef(null)
	const [error, setError] = useState(null)

	useEffect(() => {
		let isMounted = true

		const mountFooter = async () => {
			try {
				if (!footerRef.current) {
					throw new Error('Footer container not found')
				}
				const footerMounter = await import('footerApp/footerMounter')

				if (!isMounted) return

				footerMounter.default(footerRef.current)
			} catch (error) {
				setError(error)
			}
		}

		mountFooter()

		return () => {
			isMounted = false
			if (footerRef.current) {
				// clear the container element
				footerRef.current.innerHTML = ''
			}
		}
	}, [])

	if (error) {
		throw Error(error)
	}

	return <div ref={footerRef} />
}
