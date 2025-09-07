export const handleOverlayClick = (
	e: React.MouseEvent<HTMLDivElement, MouseEvent>,
	setIsModalOpen: (value: boolean) => void
): void => {
	if (e.target === e.currentTarget) {
		setTimeout(() => {
			setIsModalOpen(false)
		}, 250)
	}
}
