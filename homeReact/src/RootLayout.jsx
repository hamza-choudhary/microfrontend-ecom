import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'
// const footerMounter = React.lazy(() => import('footerApp/footerMounter'))
import footerMounter from 'footerApp/footerMounter'
const Header = React.lazy(() => import('headerApp/Header'))

export default function RootLayout() {
	const footerRef = useRef()
	const [showHeader, setShowHeader] = useState(false)

	useEffect(() => {
		footerMounter(footerRef.current)
	}, [])

	return (
		<div className="p-4 border-dashed border-8 border-orange-400 bg-yellow-100">
			<button
				className="p-2 bg-blue-400 rounded-md text-white"
				onClick={() => setShowHeader((p) => !p)}
			>
				show heder
			</button>
			{showHeader && (
				<Suspense>
					<Header />
				</Suspense>
			)}
			<div className="my-4 min-h-[60vh]">
				<Outlet />
			</div>
			<div ref={footerRef} />
		</div>
	)
}
