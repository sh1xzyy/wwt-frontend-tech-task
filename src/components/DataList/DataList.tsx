import { FilterChoose } from '@/shared/api/types/Filter'

import DataItem from './parts/DataItem'

const DataList = ({ data }: { data: FilterChoose[] }) => {
	console.log(data)

	return (
		<ul className="grid grid-cols-3 gap-[30px]">
			{data.map((data: FilterChoose) => (
				<DataItem
					key={data.id}
					data={data}
				/>
			))}
		</ul>
	)
}

export default DataList
