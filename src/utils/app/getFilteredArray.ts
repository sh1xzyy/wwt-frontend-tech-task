import { FilterBase, FilterChoose } from '@/shared/api/types/Filter'

export const getFilteredArray = (data: FilterBase[]) =>
	data.filter((item): item is FilterChoose => item.type === 'OPTION')
