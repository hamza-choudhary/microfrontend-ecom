import { BehaviorSubject } from 'rxjs'

export const cart$ = new BehaviorSubject([])

export const addToCart = (product) => {
	const currentCart = cart$.value
	const existingItem = currentCart.find((item) => item.id === product.id)

	if (existingItem) {
		const updatedCart = currentCart.map((item) =>
			item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
		)
		cart$.next(updatedCart)
		return
	}

	cart$.next([...currentCart, { ...product, quantity: 1 }])
}

export const removeFromCart = (id) => {
	const currentCart = cart$.value
	const itemToRemove = currentCart.find((item) => item?.id === id)

	if (itemToRemove && itemToRemove.quantity > 1) {
		const updatedCart = currentCart.map((item) =>
			item.id === id ? { ...item, quantity: item.quantity - 1 } : item
		)
		cart$.next(updatedCart)
		return
	}

	const updatedCart = currentCart.filter((item) => item?.id !== id)
	cart$.next(updatedCart)
}

export const updateQuantity = (id) => {
	const currentCart = cart$.value

	const updatedCart = currentCart.map((item) =>
		item.id === id ? { ...item, quantity: item.quantity + 1 } : item
	)
	cart$.next(updatedCart)
	return
}

export const clearCart = () => {
	cart$.next([])
}

export const getTotalItems = () => {
	return cart$.value.reduce((total, item) => total + item.quantity, 0)
}

export const getTotalPrice = () => {
	return cart$.value.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	)
}

export const getCart = () => {
	return cart$.value
}
