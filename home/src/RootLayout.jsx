import footerMounter from 'footerApp/footerMounter'
import Header from 'headerApp/Header'
import { useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
	const footerRef = useRef()

	useEffect(() => {
		footerMounter(footerRef.current)
	}, [])

	return (
		<div style={{ backgroundColor: 'pink' }}>
			<Header />
			<Outlet />
			<div ref={footerRef} />
		</div>
	)
}
