import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { productData } from './data'
import { addToCart } from 'solidApp/cart'


export default function ProductDetailPage() {
	const { id } = useParams()
	const [product, setProduct] = useState({})

	useEffect(() => {
		const data = productData.find((item) => Number(item.id) === Number(id))
		if (data) {
			setProduct(data)
		}
	}, [id])

	if (!product) {
		return <div>404 page not found</div>
	}

	function handleAddToCart() {
		addToCart(product)
	}


	return (
		<div className="flex flex-col md:flex-row gap-8">
			<div className="md:w-1/2">
				<img
					src={product?.image}
					alt={product?.name}
					className="rounded-lg shadow-md w-[300px] h-[300px]"
				/>
			</div>
			<div className="md:w-1/2">
				<h2 className="text-3xl font-bold mb-4">{product?.name}</h2>
				<p className="text-xl text-gray-600 mb-4">
					${product?.price?.toFixed(2)}
				</p>
				<p className="text-gray-700 mb-6">{product?.description}</p>
				<button
					onClick={handleAddToCart}
					className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors"
				>
					Add to Cart
				</button>
			</div>
		</div>
	)
}
