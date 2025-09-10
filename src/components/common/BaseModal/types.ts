export interface BaseModalProps {
	children: React.ReactNode
	styles: string
	closeButtonStyles: string
	setIsModalOpen: (value: boolean) => void
}

export interface CloseButtonProps {
	styles: string
	setIsClosing: (value: boolean) => void
}
