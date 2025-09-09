import { FilterChoose } from '@/shared/api/types/Filter'

import OptionsList from './OptionsList'

const DataItem = ({ data }: { data: FilterChoose }) => {
	return (
		<li className="w-auto border border-[#31393c] px-[20px] py-[20px] rounded-[20px] text-[#31393c]">
			<div className="mb-[20px]">
				<h3 className="font-bold text-[26px] mb-[5px]">{data.name}</h3>
				<p className="text-[18px]">{data.description}</p>
			</div>
			<OptionsList data={data} />
		</li>
	)
}

export default DataItem
