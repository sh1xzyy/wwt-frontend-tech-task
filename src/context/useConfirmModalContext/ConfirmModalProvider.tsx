import { useState } from 'react'

import { ChildrenProps } from './types'
import { ConfirmModalContext } from './useConfirmModalContext'

const ConfirmModalProvider = ({ children }: ChildrenProps) => {
	const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false)

	return (
		<ConfirmModalContext.Provider
			value={{ isConfirmModalOpen, setIsConfirmModalOpen }}
		>
			{children}
		</ConfirmModalContext.Provider>
	)
}

export default ConfirmModalProvider
