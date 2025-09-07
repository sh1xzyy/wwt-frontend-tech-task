export interface ActionButtonProps {
	title: string
	styles: string
	type?: 'button' | 'submit' | 'reset'
	func?: () => void
}
