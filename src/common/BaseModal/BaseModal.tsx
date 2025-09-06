import CloseButton from './parts/CloseButton'

interface BaseModalProps {
	children: React.ReactNode
	setIsModalOpen: (a: boolean) => void
}

const BaseModal = ({ children, setIsModalOpen }: BaseModalProps) => {
	const handleOverlayClick = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>
	): void => {
		if (e.target === e.currentTarget) {
			setIsModalOpen(false)
		}
	}
	return (
		<div
			className="fixed inset-0 w-full h-full backdrop-blur-[25px] bg-[rgba(27, 27, 27, 0.3)] px-[20px] py-[20px] z-[1000] xl:px-[80px] xl:py-[80px] overflow-auto"
			onClick={handleOverlayClick}
		>
			<div className="relative flex flex-col items-center rounded-2xl text-[#31393c] bg-[#fff] max-w-[1280px] h-auto px-[34px] py-[40px] border border-[#000]">
				<CloseButton setIsModalOpen={setIsModalOpen} />
				{children}
			</div>
		</div>
	)
}

export default BaseModal
