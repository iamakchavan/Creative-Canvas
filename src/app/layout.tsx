import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Creative Canvas',
	description: 'Express your creativity with this minimalist digital canvas',
	icons: {
		icon: [
			{ url: '/favicon.svg', type: 'image/svg+xml' },
			{ url: '/cc.svg', type: 'image/svg+xml' }
		]
	}
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
				<link rel="alternate icon" href="/cc.svg" />
			</head>
			<body>{children}</body>
		</html>
	)
}
