import clsx from 'clsx'

import { CloseButtonProps } from '../types'

const CloseButton = ({ styles, setIsClosing }: CloseButtonProps) => {
	return (
		<button
			className={clsx('absolute right-[33px]', styles)}
			type="button"
			onClick={() => {
				setIsClosing(true)
			}}
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
