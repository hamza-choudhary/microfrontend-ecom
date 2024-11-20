import footerMounter from 'footerApp/footerMounter'
import Header from 'headerApp/Header'
import { useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
	const footerRef = useRef()
	const [showHeader, setShowHeader] = useState(false)

	useEffect(() => {
		footerMounter(footerRef.current)
	}, [])

	return (
		<div className="p-4 border-dashed border-8 border-orange-400 bg-yellow-100">
			<button onClick={() => setShowHeader((p) => !p)}>show heder</button>
			{showHeader && <Header />}
			<div className="my-4 min-h-[60vh]">
				<Outlet />
			</div>
			<div ref={footerRef} />
		</div>
	)
}
