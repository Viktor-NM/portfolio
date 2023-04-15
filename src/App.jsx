import { Languages } from './components/Languages'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
import { Spacer } from './components/Spacer'
import { Header } from './components/Header'
import { IconChevronUp } from '@tabler/icons-react'
import { useEffect, useState } from 'react'

export const App = () => {
	const [backTop, setBackTop] = useState(false)

	useEffect(() => {
		window.onscroll = () => {
			if (document.documentElement.scrollTop > 300) {
				setBackTop(true)
			} else {
				setBackTop(false)
			}
		}
	}, [])

	const moveUp = () => {
		document.documentElement.scrollTop = 0
	}
	return (
		<>
			<Header />
			<main className='container'>
				<button
					id='moveUp'
					onClick={moveUp}
					style={{ display: backTop ? 'block' : 'none' }}>
					<IconChevronUp size={48} />
				</button>
				<About />
				<Spacer />
				<Languages />
				<Projects />
			</main>
			<Footer />
		</>
	)
}
