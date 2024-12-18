import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import SafeComponent from './SafeComponent'
const Header = React.lazy(() => import('headerApp/Header'))
const Footer = React.lazy(() => import('./LazyFooter'))

export default function RootLayout() {
	return (
		<div className="p-4 border-dashed border-8 border-orange-400 bg-yellow-100">
			<SafeComponent>
				<Suspense fallback={<div>loading the header in suspense</div>}>
					<Header options={{ title: 'hello title' }} />
				</Suspense>
			</SafeComponent>
			<div className="my-4 min-h-[60vh]">
				<Outlet />
			</div>
			<SafeComponent>
				<Suspense fallback={<div>loading the footer in suspense</div>}>
					<Footer />
				</Suspense>
			</SafeComponent>
		</div>
	)
}
