import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import Product from './Product'
import RootLayout from './RootLayout'

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'product',
				element: <Product />,
			},
		],
	},
])

export default function App() {
	return <RouterProvider router={router} />
}
