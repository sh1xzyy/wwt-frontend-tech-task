import clsx from 'clsx'

import Line from '@/common/Line/Line'

import { GroupProps } from '../../types'
import CheckboxList from './CheckboxList'

const CheckboxGroup = ({ data: { title, filter, index } }: GroupProps) => {
	return (
		<>
			<li
				className={clsx(
					index !== 0 && 'mt-[32px]',
					index === 0 && 'mt-[64px] mb-[32px]',
					index === 1 && 'mb-[56px]',
					index === 2 && 'mb-[43px]',
					index === 3 && 'mb-[45px]',
					index === 7 && 'mb-[22px]',
					(index >= 4 || index <= 8) && 'mb-[32px]',
					index === 8 && 'mt-[32px]',
					index === 9 && 'mb-[32px]',
					index === 10 && 'mt-[40px] mb-[79px]'
				)}
			>
				<span className="block font-medium text-[24px] text-[#31393c] mb-[24px]">
					{title}
				</span>
				<CheckboxList filters={filter} />
			</li>
			<Line />
		</>
	)
}

export default CheckboxGroup
