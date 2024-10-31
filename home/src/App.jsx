import ProductDetailPage from 'productApp/ProductDetailPage'
import ProductListPage from 'productApp/ProductListPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './RootLayout'

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ index: true, element: <ProductListPage /> },
			{ path: 'product', element: <ProductDetailPage /> },
		],
	},
])

export default function App() {
	console.log('in app')
	return <RouterProvider router={router} />
}
