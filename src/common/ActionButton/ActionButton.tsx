interface ActionButtonProps {
	title: string
	setIsModalOpen: (a: boolean) => void
}

const ActionButton = ({ title, setIsModalOpen }: ActionButtonProps) => {
	return (
		<button
			className="h-[64px] min-w-[184px] cursor-pointer rounded-2xl px-[10px] bg-[#ff5f00] font-bold text-[#fff] transition linear duration-[250ms] hover:bg-[#da5102]"
			type="button"
			onClick={() => setIsModalOpen(true)}
		>
			{title}
		</button>
	)
}

export default ActionButton
