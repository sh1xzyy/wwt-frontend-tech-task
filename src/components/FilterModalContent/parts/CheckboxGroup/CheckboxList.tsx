import clsx from 'clsx'

import { CheckboxListProps } from '../../types'
import CheckboxItem from './CheckboxItem'

const CheckboxList = ({ filters, onChange }: CheckboxListProps) => {
	return (
		<ul
			className={clsx(
				'grid gap-y-[16px]',
				filters.length === 4
					? 'grid-cols-2'
					: filters.length === 2
						? 'grid-cols-1'
						: 'grid-cols-3'
			)}
		>
			{filters.map((data, index) => (
				<CheckboxItem
					key={index}
					data={data}
					index={index}
					onChange={onChange}
				/>
			))}
		</ul>
	)
}

export default CheckboxList
