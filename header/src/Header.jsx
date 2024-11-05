import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import cartMounter from 'solidApp/cartMounter'

console.log(cartMounter, 'in')

export default function Header() {
	const cartRef = useRef()

	useEffect(() => {
		cartMounter(cartRef.current)
	}, [])

	return (
		<header className="bg-red-200 shadow-md sticky">
			<div className="container mx-auto px-4 py-4 flex justify-between items-center">
				<Link to="/" className="text-2xl font-bold text-gray-800">
					ElegantShop
				</Link>
				<div className="relative">
					<div ref={cartRef} />
					{/* {isCartOpen && <CartDropdown onClose={() => setIsCartOpen(false)} />} */}
				</div>
			</div>
		</header>
	)
}
