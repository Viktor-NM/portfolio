import Draggable from 'react-draggable'
import '../styles/Spacer.scss'
import { useRef, useState } from 'react'
import { IconBrandLinkedin, IconRun } from '@tabler/icons-react'

export const Spacer = () => {
	const [disable, setDisable] = useState('none')

	const itemRef = useRef(null)
	const colRef = useRef(null)
	const onDragItem = (e, ui) => {
		const itemPosition = ui.node.offsetLeft + ui.x
		const colPosition = colRef.current.getBoundingClientRect()

		const distance = colPosition.width + 50 - itemPosition
		if (distance >= 0) {
			setDisable('')
			colRef.current.classList.add('activeCol')
		} else {
			setDisable('none')
			colRef.current.classList.remove('activeCol')
		}
	}

	return (
		<section className='spacer'>
			<Draggable axis='x' defaultClassName='itm' onDrag={onDragItem} nodeRef={itemRef}>
				<div ref={itemRef} title='Move me'>
					<IconRun size={68} />
				</div>
			</Draggable>
			<div
				className='col'
				ref={colRef}
				title={disable === 'none' ? 'Move him' : 'Go to my linkedin'}>
				<a
					rel='external'
					target='_blank'
					href='https://www.linkedin.com/in/victor-nu%C3%B1ez/'
					style={{ pointerEvents: disable }}>
					<IconBrandLinkedin size={68} />
				</a>
			</div>
		</section>
	)
}
