import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import cartMounter from 'solidApp/cartMounter'

export default function Header() {
	const cartRef = useRef()

	useEffect(() => {
		cartMounter(cartRef.current)
	}, [])

	return (
		<header className="bg-white shadow-md sticky top-0 z-50">
			<div className="container mx-auto px-4 py-4 flex justify-between items-center">
				<Link
					to="/"
					className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors"
				>
					ElegantShop
				</Link>
				<div className="relative">
					<div ref={cartRef} />
				</div>
			</div>
		</header>
	)
}
