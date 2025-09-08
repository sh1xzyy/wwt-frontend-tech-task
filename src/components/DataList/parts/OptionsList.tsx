import { FilterChoose } from '@/shared/api/types/Filter'

import OptionItem from './OptionItem'

const OptionsList = ({ data }: { data: FilterChoose }) => {
	console.log(data)

	return (
		<ul className="flex flex-col gap-[15px]">
			{data.options.map(option => (
				<OptionItem
					key={option.id}
					option={option}
				/>
			))}
		</ul>
	)
}

export default OptionsList
