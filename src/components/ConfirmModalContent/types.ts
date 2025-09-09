import { CheckboxFilterGroup } from '../FilterModalContent/types'

export interface ConfirmModalContentProps {
	setFilters: React.Dispatch<React.SetStateAction<CheckboxFilterGroup[]>>
	filters: CheckboxFilterGroup[]
}
