import React, { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './RootLayout'
const ProductListPage = React.lazy(() => import('productApp/ProductListPage'))
const ProductDetailPage = React.lazy(() =>
	import('productApp/ProductDetailPage')
)

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: (
					<Suspense fallback={<div>Product list page is LOADING...</div>}>
						<ProductListPage />
					</Suspense>
				),
			},
			{
				path: 'product/:id',
				element: (
					<Suspense fallback={<div>Product Detail Page</div>}>
						<ProductDetailPage />
					</Suspense>
				),
			},
		],
	},
])

export default function App() {
	return <RouterProvider router={router} />
}
