import clsx from 'clsx'

import { ActionButtonProps } from './types'

const ActionButton = ({
	title,
	styles,
	type = 'button',
	func
}: ActionButtonProps) => {
	return (
		<button
			className={clsx(
				'h-[64px] cursor-pointer rounded-2xl px-[10px] font-bold transition linear duration-[250ms]',
				styles
			)}
			type={type}
			onClick={func}
		>
			{title}
		</button>
	)
}

export default ActionButton
