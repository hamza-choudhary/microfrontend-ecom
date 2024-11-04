import footerMounter from 'footerApp/footerMounter'
import Header from 'headerApp/Header'
import { useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import cartMounter from 'solidApp/cartMounter'

export default function RootLayout() {
	const footerRef = useRef()
	const cartRef = useRef()

	useEffect(() => {
		footerMounter(footerRef.current)
		cartMounter(cartRef.current)
	}, [])

	return (
		<div style={{backgroundColor:'pink'}}>
			<div ref={cartRef} />
			<Header />
			<Outlet />
			<div ref={footerRef} />
		</div>
	)
}
