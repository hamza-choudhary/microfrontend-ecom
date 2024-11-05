/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { addToCart } from 'solidApp/cart'
import { productData } from './data'

export default function ProductListPage() {
	return (
		<div className="container mx-auto">
			<h2 className="text-3xl font-bold mb-6">Our Products</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{productData.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	)
}

function ProductCard({ product }) {
	function handleAddToCart() {
		addToCart(product)
	}

	return (
		<div>
			<Link to={`/product/${product.id}`} className="group">
				<div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
					<img
						src={product.image}
						alt={product.name}
						width={200}
						height={200}
						className="w-full h-48 object-cover"
					/>
					<div className="p-4">
						<h3 className="text-lg font-semibold text-gray-800 mb-2">
							{product.name}
						</h3>
						<p className="text-gray-600">${product.price.toFixed(2)}</p>
					</div>
				</div>
			</Link>
			<div>
				<button
					onClick={handleAddToCart}
					className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors"
				>
					add to cart
				</button>
			</div>
		</div>
	)
}
