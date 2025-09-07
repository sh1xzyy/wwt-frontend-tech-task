import clsx from 'clsx'

import { useCloseModalByKeydown } from '@/hooks/useCloseModalByKeydown'

import { handleOverlayClick } from '../../../utils/modal/handleOverlayClick'
import CloseButton from './parts/CloseButton'
import { BaseModalProps } from './types'

const BaseModal = ({
	children,
	styles,
	closeButtonStyles,
	setIsModalOpen
}: BaseModalProps) => {
	useCloseModalByKeydown(setIsModalOpen)

	return (
		<div
			className="fixed flex justify-center inset-0 w-full h-full backdrop-blur-[25px] bg-[rgba(27, 27, 27, 0.3)] px-[20px] py-[20px] z-[1000] xl:px-[80px] overflow-auto xl:py-[80px]"
			onClick={e => handleOverlayClick(e, setIsModalOpen)}
		>
			<div
				className={clsx(
					'relative flex flex-col items-center h-[fit-content] rounded-2xl text-[#31393c] bg-[#fff] w-full max-w-[1280px] border border-[#000]',
					styles
				)}
			>
				<CloseButton
					styles={closeButtonStyles}
					setIsModalOpen={setIsModalOpen}
				/>
				{children}
			</div>
		</div>
	)
}

export default BaseModal
