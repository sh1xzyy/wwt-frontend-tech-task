import { useQuery } from '@tanstack/react-query'

import { FilterChoose } from '@/shared/api/types/Filter'

import { fetchData } from '../api/fetchFilters/fetchFilters'

export const useFiltersQuery = () =>
	useQuery<{ filterItems: FilterChoose[] }, Error>({
		queryKey: ['getData'],
		queryFn: fetchData
	})
