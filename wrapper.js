import { h, cloneElement } from 'preact'

export default (props) => {

	const { children } = props
	
	return  (
		<main>
			{ cloneElement(children[0], { ...props }) }
		</main>
	)
}