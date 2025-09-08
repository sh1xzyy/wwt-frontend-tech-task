import { ReactNode } from 'react'

interface ContainerProps {
	children: ReactNode
}

const Container = ({ children }: ContainerProps) => {
	return <div className="container m-auto px-[80px]">{children}</div>
}

export default Container
