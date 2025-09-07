import { useQuery } from '@tanstack/react-query'

import { FilterBase } from '@/shared/api/types/Filter'

import { fetchData } from '../api/fetchFilters/fetchFilters'

export const useFiltersQuery = () =>
	useQuery<{ filterItems: FilterBase[] }, Error>({
		queryKey: ['getData'],
		queryFn: fetchData
	})
