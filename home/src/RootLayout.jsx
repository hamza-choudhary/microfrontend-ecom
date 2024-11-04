import footerMounter from 'footerApp/footerMounter'
import Header from 'headerApp/Header'
import { useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { addItem, cart } from 'solidApp/cart'
import cartMounter from 'solidApp/cartMounter'

export default function RootLayout() {
	const [myCart, setMyCart] = useState([])
	const footerRef = useRef()
	const cartRef = useRef()

	useEffect(() => {
		footerMounter(footerRef.current)
		cartMounter(cartRef.current)
	}, [])

	useEffect(() => {
		addItem()
		const subscription = cart.subscribe((val) => setMyCart(val))
		return () => subscription.unsubscribe()
	}, [])

	console.log(JSON.stringify(myCart))

	return (
		<div>
			in RootLayout
			<div ref={cartRef} />
			<Header />
			<Outlet />
			<div ref={footerRef} />
		</div>
	)
}
