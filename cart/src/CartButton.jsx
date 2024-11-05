import { createEffect, createSignal } from 'solid-js'
import {
	addToCart,
	cart$,
	clearCart,
	getCart,
	getTotalItems,
	removeFromCart,
} from './cart'

export default function CartButton() {
	const [isCartOpen, setIsCartOpen] = createSignal(false)
	const [cartCount, setCartCount] = createSignal(0)
	const [cart, setCart] = createSignal([])

	createEffect(() => {
		const subscription = cart$.subscribe((updatedCart) => {
			setCart(updatedCart)
			setCartCount(getTotalItems())
		})

		return () => subscription.unsubscribe()
	})

	const handleRemoveFromCart = (id) => {
		removeFromCart(id)
	}

	const handleClearCart = () => {
		clearCart()
	}

	return (
		<div class="relative">
			<button
				class="flex items-center text-gray-600 hover:text-gray-800"
				onClick={() => setIsCartOpen(!isCartOpen())}
			>
				<span class="font-semibold">{cartCount()}</span>
			</button>
			{isCartOpen() && (
				<div class="absolute right-0 mt-2 bg-white shadow-lg rounded-md p-4 w-64">
					<h3 class="text-lg font-medium mb-2">Cart</h3>
					{cart().length === 0 ? (
						<p>Your cart is empty</p>
					) : (
						<>
							{cart().map((item) => (
								<div class="flex justify-between items-center mb-2">
									<div>
										{item.name} (x{item.quantity})
									</div>
									<button
										class="text-red-500 hover:text-red-700"
										onClick={() => handleRemoveFromCart(item.id)}
									>
										Remove
									</button>
								</div>
							))}
							<button
								class="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md mt-4"
								onClick={handleClearCart}
							>
								Clear Cart
							</button>
						</>
					)}
				</div>
			)}
		</div>
	)
}
