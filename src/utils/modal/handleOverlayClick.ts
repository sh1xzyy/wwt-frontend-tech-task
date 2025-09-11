export const handleOverlayClick = (
	e: React.MouseEvent<HTMLDivElement, MouseEvent>,
	setIsClosing: (value: boolean) => void
): void => {
	if (e.target === e.currentTarget) {
		setTimeout(() => {
			setIsClosing(true)
		}, 250)
	}
}
