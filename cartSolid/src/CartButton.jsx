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
		<div class="relative px-5 py-3 bg-white rounded-full border-2 border-red-600 border-dashed flex flex-row gap-4">
			<div className="h-14 w-14">
				<SolidSVG />
			</div>
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

function SolidSVG() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 166 155.3">
			<defs>
				<linearGradient
					id="a"
					gradientUnits="userSpaceOnUse"
					x1="27.5"
					y1="3"
					x2="152"
					y2="63.5"
				>
					<stop offset=".1" stop-color="#76b3e1" />
					<stop offset=".3" stop-color="#dcf2fd" />
					<stop offset="1" stop-color="#76b3e1" />
				</linearGradient>
				<linearGradient
					id="b"
					gradientUnits="userSpaceOnUse"
					x1="95.8"
					y1="32.6"
					x2="74"
					y2="105.2"
				>
					<stop offset="0" stop-color="#76b3e1" />
					<stop offset=".5" stop-color="#4377bb" />
					<stop offset="1" stop-color="#1f3b77" />
				</linearGradient>
				<linearGradient
					id="c"
					gradientUnits="userSpaceOnUse"
					x1="18.4"
					y1="64.2"
					x2="144.3"
					y2="149.8"
				>
					<stop offset="0" stop-color="#315aa9" />
					<stop offset=".5" stop-color="#518ac8" />
					<stop offset="1" stop-color="#315aa9" />
				</linearGradient>
				<linearGradient
					id="d"
					gradientUnits="userSpaceOnUse"
					x1="75.2"
					y1="74.5"
					x2="24.4"
					y2="260.8"
				>
					<stop offset="0" stop-color="#4377bb" />
					<stop offset=".5" stop-color="#1a336b" />
					<stop offset="1" stop-color="#1a336b" />
				</linearGradient>
			</defs>
			<path
				d="M163 35S110-4 69 5l-3 1c-6 2-11 5-14 9l-2 3-15 26 26 5c11 7 25 10 38 7l46 9 18-30z"
				fill="#76b3e1"
			/>
			<path
				d="M163 35S110-4 69 5l-3 1c-6 2-11 5-14 9l-2 3-15 26 26 5c11 7 25 10 38 7l46 9 18-30z"
				opacity=".3"
				fill="url(#a)"
			/>
			<path
				d="M52 35l-4 1c-17 5-22 21-13 35 10 13 31 20 48 15l62-21S92 26 52 35z"
				fill="#518ac8"
			/>
			<path
				d="M52 35l-4 1c-17 5-22 21-13 35 10 13 31 20 48 15l62-21S92 26 52 35z"
				opacity=".3"
				fill="url(#b)"
			/>
			<path
				d="M134 80a45 45 0 00-48-15L24 85 4 120l112 19 20-36c4-7 3-15-2-23z"
				fill="url(#c)"
			/>
			<path
				d="M114 115a45 45 0 00-48-15L4 120s53 40 94 30l3-1c17-5 23-21 13-34z"
				fill="url(#d)"
			/>
		</svg>
	)
}
