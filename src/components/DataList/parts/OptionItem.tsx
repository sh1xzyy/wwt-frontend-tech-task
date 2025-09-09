import { FilterChooseOption } from '@/shared/api/types/Filter'

const OptionItem = ({ option }: { option: FilterChooseOption }) => {
	return (
		<li className="relative pl-[15px]">
			<span className="absolute top-1/2 left-0 -translate-y-1/2 w-[8px] h-[8px] bg-[#31393c] rounded-2xl"></span>

			<h4 className="mb-[5px]">{option.name}</h4>
			<span className="text-[12px]">{option.description}</span>
		</li>
	)
}

export default OptionItem
