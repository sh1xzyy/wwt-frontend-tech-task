export interface BaseModalProps {
	children: React.ReactNode
	styles: string
	closeButtonStyles: string
	setIsModalOpen: (a: boolean) => void
}

export interface CloseButtonProps {
	styles: string
	setIsModalOpen: (a: boolean) => void
}
