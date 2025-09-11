import clsx from 'clsx'

import { useCloseModalByKeydown } from '@/hooks/useCloseModalByKeydown'

import { useModalStore } from '../../../store/useModalStore'
import { handleOverlayClick } from '../../../utils/modal/handleOverlayClick'
import CloseButton from './parts/CloseButton'
import { BaseModalProps } from './types'

const BaseModal = ({
	children,
	styles,
	closeButtonStyles,
	setIsModalOpen
}: BaseModalProps) => {
	const { isClosing, setIsClosing } = useModalStore()
	useCloseModalByKeydown(setIsClosing)

	const handleAnimateToEnd = () => {
		if (isClosing) {
			setIsModalOpen(false)
			setIsClosing(false)
		}
	}

	return (
		<div
			className={clsx(
				'fixed flex justify-center inset-0 w-full h-full backdrop-blur-[25px] bg-[rgba(27, 27, 27, 0.3)] px-[20px] py-[20px] z-[1000] animate-modal xl:px-[80px] overflow-auto xl:py-[80px]'
			)}
			onClick={e => handleOverlayClick(e, setIsClosing)}
		>
			<div
				className={clsx(
					'relative flex flex-col items-center h-[fit-content] rounded-2xl text-[#31393c] bg-[#fff] w-full max-w-[1280px] border border-[#000]',
					isClosing ? 'animate-close-modal' : 'animate-open-modal',
					styles
				)}
				onAnimationEnd={handleAnimateToEnd}
			>
				<CloseButton
					styles={closeButtonStyles}
					setIsClosing={setIsClosing}
				/>
				{children}
			</div>
		</div>
	)
}

export default BaseModal
