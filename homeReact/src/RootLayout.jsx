import footerMounter from 'footerApp/footerMounter'
import React, { Suspense, useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import SafeComponent from './SafeComponent'
const Header = React.lazy(() => import('headerApp/Header'))

export default function RootLayout() {
	const footerRef = useRef()

	useEffect(() => {
		footerMounter(footerRef.current)
	}, [])

	return (
		<div className="p-4 border-dashed border-8 border-orange-400 bg-yellow-100">
				<SafeComponent>
					<Suspense>
						<Header options={{ title: 'hello title' }} />
					</Suspense>
				</SafeComponent>
			<div className="my-4 min-h-[60vh]">
				<Outlet />
			</div>
			<div ref={footerRef} />
		</div>
	)
}
