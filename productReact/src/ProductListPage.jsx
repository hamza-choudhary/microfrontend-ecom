/* eslint-disable react/prop-types */
import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { addToCart } from 'solidApp/cart'
import { productData } from './data'
import { LogoSVG } from './LogoSVG'

export default function ProductListPage() {
	return (
		<div className="relative bg-gradient-to-br from-pink-200 to-red-400 overflow-hidden border-4 border-dashed border-red-600">
			<div className="container mx-auto relative z-10 ">
				<h2 className="text-3xl font-bold mb-8 text-gray-800 animate-fade-in">
					Our Products
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-8 rounded-lg">
					{productData.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</div>
			<div className="absolute bottom-0 right-0 w-64 h-64 opacity-10 animate-spin-slow">
				<LogoSVG />
			</div>
		</div>
	)
}

function ProductCard({ product }) {
	function handleAddToCart(e) {
		e.preventDefault()
		e.stopPropagation()
		addToCart(product)
	}

	return (
		<Link to={`/product/${product.id}`} className="group">
			<div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
				<div className="relative">
					<img
						src={product.image}
						alt={product.name}
						width={400}
						height={300}
						className="w-full h-64 object-cover"
					/>
				</div>
				<div className="p-6">
					<h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
						{product.name}
					</h3>
					<p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
					<div className="flex justify-between items-center">
						<span className="text-sm text-gray-500">{product.category}</span>
						<button
							onClick={handleAddToCart}
							className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors flex items-center space-x-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
						>
							<ShoppingCart size={16} />
							<span>Add to Cart</span>
						</button>
					</div>
				</div>
			</div>
		</Link>
	)
}
