import { BehaviorSubject } from 'rxjs'

export const cart = new BehaviorSubject([])

export function addItem() {
	cart.next(['hello', 'world'])
}
