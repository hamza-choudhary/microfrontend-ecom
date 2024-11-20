import { render } from 'solid-js/web'
import CartButton from './CartButton.jsx'

let dispose

export default function (element, id = 0) {
	if (dispose) dispose()

	dispose = render(() => <CartButton id={id} />, element)
}
