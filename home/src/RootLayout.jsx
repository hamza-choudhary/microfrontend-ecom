import Header from 'headerApp/Header'
import { Outlet } from 'react-router-dom'
export default function RootLayout() {
	return (
		<div>
			in RootLayout
			<Header />
			<Outlet />
		</div>
	)
}
