import ConfirmModalProvider from './useConfirmModalContext/ConfirmModalProvider'
import { ChildrenProps } from './useConfirmModalContext/types'

const AppProvider = ({ children }: ChildrenProps) => {
	return <ConfirmModalProvider>{children}</ConfirmModalProvider>
}

export default AppProvider
