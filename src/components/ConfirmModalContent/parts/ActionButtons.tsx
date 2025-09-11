import ActionButton from '../../../components/common/ActionButton/ActionButton'
import { useModalStore } from '../../../store/useModalStore'

const ActionButtons = () => {
	const { setIsFilterModalOpen, setIsConfirmModalOpen } = useModalStore()
	return (
		<div className="flex gap-[32px]">
			<ActionButton
				styles="min-w-[280px] bg-[#ffffff] text-[#474747] border-2 border-[#b4b4b4] hover:bg-[#d8d8d8]"
				title="Use old filter"
				func={() => {
					setIsConfirmModalOpen(false), setIsFilterModalOpen(false)
				}}
			/>
			<ActionButton
				styles="min-w-[280px] bg-[#ff5f00] text-[#fff] hover:bg-[#da5102]"
				title="Apply new filter"
				type="submit"
			/>
		</div>
	)
}

export default ActionButtons
