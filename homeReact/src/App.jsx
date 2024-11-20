import React, { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './RootLayout'
import SafeComponent from './SafeComponent'
const ProductDetailPage = React.lazy(() => import('productApp/ProductDetailPage'))
const ProductListPage = React.lazy(() => import('productApp/ProductListPage'))

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: (
					<SafeComponent>
						<Suspense fallback={<div>loading the header in suspense</div>}>
							<ProductListPage />
						</Suspense>
					</SafeComponent>
				),
			},
			{
				path: 'product/:id',
				element: (
					<SafeComponent>
						<Suspense fallback={<div>loading the header in suspense</div>}>
							<ProductDetailPage />
						</Suspense>
					</SafeComponent>
				),
			},
		],
	},
])

export default function App() {
	return <RouterProvider router={router} />
}
