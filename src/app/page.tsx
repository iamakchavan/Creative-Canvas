'use client'
import { Editor, Tldraw } from 'tldraw'

export default function Home() {
	return (
		<main>
			<div style={{ position: 'fixed', inset: 0 }}>
				<Tldraw
					onMount={(editor: Editor) => {
						editor.updateInstanceState({ isGridMode: true })
					}}
				/>
			</div>
		</main>
	)
}
