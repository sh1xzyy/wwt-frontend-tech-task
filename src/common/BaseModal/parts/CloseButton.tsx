interface CloseButtonProps {
	setIsModalOpen: (a: boolean) => void
}

const CloseButton = ({ setIsModalOpen }: CloseButtonProps) => {
	return (
		<button
			className="absolute top-[52px] right-[33px]"
			type="button"
			onClick={() => setIsModalOpen(false)}
			aria-label="close modal button"
		>
			<svg
				width={24}
				height={24}
			>
				<use href="/icons/sprite.svg#icon-close"></use>
			</svg>
		</button>
	)
}

export default CloseButton
