import { ArrowLeft, ShoppingCart } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { addToCart } from 'solidApp/cart'
import { productData } from './data'

export default function ProductDetailPage() {
	const { id } = useParams()
	const [product, setProduct] = useState(null)

	useEffect(() => {
		const data = productData.find((item) => Number(item.id) === Number(id))
		if (data) {
			setProduct(data)
		}
	}, [id])

	if (!product) {
		return (
			<div className="flex flex-col items-center justify-center h-screen">
				<h2 className="text-2xl font-bold mb-4">404 - Product Not Found</h2>
				<Link to="/" className="text-red-600 hover:underline flex items-center">
					<ArrowLeft size={20} className="mr-2" />
					Back to Products
				</Link>
			</div>
		)
	}

	function handleAddToCart() {
		addToCart(product)
	}

	return (
		<div className="container mx-auto px-4 py-8">
			<Link
				to="/"
				className="text-red-600 hover:underline flex items-center mb-6"
			>
				<ArrowLeft size={20} className="mr-2" />
				Back to Products
			</Link>
			<div className="flex flex-col lg:flex-row gap-12">
				<div className="lg:w-1/2">
					<div className="bg-white rounded-lg shadow-md overflow-hidden">
						<img
							src={product.image}
							alt={product.name}
							className="w-full h-auto object-cover"
							style={{ maxHeight: '500px' }}
						/>
					</div>
				</div>
				<div className="lg:w-1/2">
					<h2 className="text-3xl font-bold mb-4 text-gray-800">
						{product.name}
					</h2>
					<p className="text-2xl font-semibold text-red-600 mb-4">
						${product.price.toFixed(2)}
					</p>
					<div className="bg-gray-100 rounded-lg p-4 mb-6">
						<h3 className="text-lg font-semibold mb-2">Product Description</h3>
						<p className="text-gray-700">{product.description}</p>
					</div>
					<div className="flex items-center mb-6">
						<div className="mr-4">
							<span className="text-gray-600">Category:</span>
							<span className="ml-2 font-semibold">{product.category}</span>
						</div>
						<div>
							<span className="text-gray-600">In Stock:</span>
							<span className="ml-2 font-semibold text-green-600">Yes</span>
						</div>
					</div>
					<button
						onClick={handleAddToCart}
						className="bg-red-600 text-white py-3 px-8 rounded-full hover:bg-red-700 transition-colors flex items-center justify-center w-full sm:w-auto"
					>
						<ShoppingCart size={20} className="mr-2" />
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	)
}
