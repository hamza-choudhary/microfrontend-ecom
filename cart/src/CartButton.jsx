import { Minus, Plus, ShoppingCart, Trash2, X } from 'lucide-solid'
import { createEffect, createSignal, onCleanup } from 'solid-js'
import {
	addToCart,
	cart$,
	clearCart,
	getTotalItems,
	removeFromCart,
} from './cart'

export default function CartButton() {
	const [isCartOpen, setIsCartOpen] = createSignal(false)
	const [cartData, setCartData] = createSignal([])
	const [cartCount, setCartCount] = createSignal(0)

	createEffect(() => {
		const subscription = cart$.subscribe((updatedCart) => {
			setCartData(updatedCart)
			setCartCount(getTotalItems())
		})

		onCleanup(() => subscription.unsubscribe())
	})

	return (
		<div class="relative">
			<button
				class="flex items-center text-gray-600 hover:text-gray-800 transition-colors focus:outline-none gap-2 border px-4 py-2 rounded-full border-red-500"
				onClick={() => setIsCartOpen(!isCartOpen())}
			>
				Cart
				<ShoppingCart class="w-6 h-6 mr-1" />
				<span class="bg-red-500 text-white rounded-full px-2 py-1 text-xs font-bold">
					{cartCount()}
				</span>
			</button>
			{isCartOpen() && (
				<div class="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-4 w-80 max-h-[80vh] overflow-y-auto">
					<div class="flex justify-between items-center mb-4">
						<h3 class="text-lg font-medium">Your Cart</h3>
						<button
							class="text-gray-500 hover:text-gray-700 transition-colors focus:outline-none"
							onClick={() => setIsCartOpen(false)}
						>
							<X class="w-5 h-5" />
						</button>
					</div>
					{cartData().length === 0 ? (
						<p class="text-gray-500">Your cart is empty</p>
					) : (
						<>
							<For each={cartData()}>
								{(item) => (
									<div class="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
										<div class="flex-1">
											<h4 class="font-medium">{item.name}</h4>
											<p class="text-sm text-gray-500">
												${item.price.toFixed(2)}
											</p>
										</div>
										<div class="flex items-center">
											<button
												class="text-gray-500 hover:text-gray-700 focus:outline-none"
												onClick={() => removeFromCart(item.id)}
											>
												<Minus class="w-4 h-4" />
											</button>
											<span class="mx-2 font-medium">{item.quantity}</span>
											<button
												class="text-gray-500 hover:text-gray-700 focus:outline-none"
												onClick={() => addToCart(item)}
											>
												<Plus class="w-4 h-4" />
											</button>
										</div>
									</div>
								)}
							</For>
							<div class="mt-4 flex justify-between items-center">
								<span class="font-medium">Total:</span>
								<span class="font-bold">
									$
									{cartData()
										.reduce(
											(total, item) => total + item.price * item.quantity,
											0
										)
										.toFixed(2)}
								</span>
							</div>
							<button
								class="w-full mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
								onClick={clearCart}
							>
								<Trash2 class="w-4 h-4 inline-block mr-2" />
								Clear Cart
							</button>
						</>
					)}
				</div>
			)}
		</div>
	)
}
