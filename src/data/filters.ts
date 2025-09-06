import { CheckboxItemProps } from '../components/FilterModal/types'

const preliminaryFilters: CheckboxItemProps[] = [
	{ label: 'Distance to the center 1 km', name: 'preliminary-center-1' },
	{ label: 'Guest rating 9+', name: 'preliminary-rating-9' },
	{ label: 'Hotels', name: 'preliminary-hotels' },
	{ label: 'Distance to the center 3 km', name: 'preliminary-center-3' },
	{ label: '5 stars', name: 'preliminary-stars-5' },
	{ label: 'Breakfast is included', name: 'preliminary-breakfast' }
]

const popularFilters: CheckboxItemProps[] = [
	{ label: '5 stars', name: 'popular-stars-5' },
	{ label: 'Breakfast is included', name: 'popular-breakfast' },
	{ label: 'Free booking', name: 'popular-free-booking' },
	{ label: '4 stars', name: 'popular-stars-4' },
	{ label: 'Distance to the center 3 km', name: 'popular-center-3' },
	{ label: 'Guest rating 8+', name: 'popular-rating-8' }
]

const accommodationFacility: CheckboxItemProps[] = [
	{ label: 'Transfer to/from the hotel', name: 'accommodation-transfer' },
	{ label: 'Breakfast included', name: 'accommodation-breakfast' },
	{ label: 'Smoking area', name: 'accommodation-smoking' },
	{ label: 'Round-the-clock reception', name: 'accommodation-reception' },
	{ label: 'Restaurant', name: 'accommodation-restaurant' },
	{ label: `Children's playground`, name: 'accommodation-playground' },
	{ label: 'Early check-in', name: 'accommodation-early-checkin' },
	{ label: 'Swimming pool', name: 'accommodation-pool' },
	{ label: 'Internet', name: 'accommodation-internet' },
	{ label: 'Late check-in', name: 'accommodation-late-checkin' },
	{ label: 'Spa center/sauna', name: 'accommodation-spa' },
	{ label: 'Security', name: 'accommodation-security' },
	{ label: 'Pets are allowed', name: 'accommodation-pets' },
	{ label: 'Gym/fitness room', name: 'accommodation-gym' },
	{ label: 'Lift', name: 'accommodation-lift' },
	{ label: 'Parking', name: 'accommodation-parking' },
	{ label: 'Conference rooms', name: 'accommodation-conference' },
	{ label: 'Eco-responsibility', name: 'accommodation-eco' }
]

// Остальные группы аналогично
const amenitiesForPeopleWithDisabilities: CheckboxItemProps[] = [
	{ label: 'Entrance without steps', name: 'disabilities-entrance' },
	{ label: 'Parking', name: 'disabilities-parking' },
	{ label: 'Lift', name: 'disabilities-lift' },
	{ label: 'Entrance 81 cm wide', name: 'disabilities-entrance-81' },
	{ label: 'Availability of a ramp', name: 'disabilities-ramp' },
	{ label: 'Handrails', name: 'disabilities-handrails' }
]

const roomFacilities: CheckboxItemProps[] = [
	{ label: 'Bath', name: 'room-bath' },
	{ label: 'Kitchen', name: 'room-kitchen' },
	{ label: 'Underfloor heating', name: 'room-heating' },
	{ label: 'Shower', name: 'room-shower' },
	{ label: 'Air Conditioning', name: 'room-ac' },
	{ label: 'Pets allowed', name: 'room-pets' },
	{ label: 'Coffee machine', name: 'room-coffee' },
	{ label: 'Iron', name: 'room-iron' },
	{ label: 'Baby bed', name: 'room-baby-bed' },
	{ label: 'Kettle', name: 'room-kettle' },
	{ label: 'Internet', name: 'room-internet' },
	{ label: 'Balcony', name: 'room-balcony' },
	{ label: 'Fridge', name: 'room-fridge' },
	{ label: 'Workplace', name: 'room-workplace' }
]

const roomFacilitiesForPeopleWithDisabilities: CheckboxItemProps[] = [
	{
		label: 'Main door entrance width 81 cm',
		name: 'room-disabilities-main-door'
	},
	{
		label: 'Handrail in the shower',
		name: 'room-disabilities-shower-handrail'
	},
	{ label: 'High toilet bowl', name: 'room-disabilities-high-toilet' },
	{
		label: 'Interior door width 81 cm',
		name: 'room-disabilities-interior-door'
	},
	{ label: 'Bath/shower chair', name: 'room-disabilities-bath-chair' },
	{ label: 'Instructions in Braille', name: 'room-disabilities-braille' },
	{ label: 'Absence of steps', name: 'room-disabilities-no-steps' },
	{
		label: 'Barrier-free shower',
		name: 'room-disabilities-barrier-free-shower'
	},
	{
		label: 'Emergency cord in the bathroom',
		name: 'room-disabilities-emergency-bath'
	},
	{
		label: 'Handrail near the toilet',
		name: 'room-disabilities-toilet-handrail'
	},
	{ label: 'Low washbasin', name: 'room-disabilities-low-washbasin' },
	{
		label: 'Emergency cord by the bedside',
		name: 'room-disabilities-emergency-bedside'
	}
]

const nutrition: CheckboxItemProps[] = [
	{ label: 'Room without meals', name: 'nutrition-no-meals' },
	{ label: 'Breakfast and dinner', name: 'nutrition-breakfast-dinner' },
	{ label: 'All inclusive', name: 'nutrition-all-inclusive' },
	{ label: 'Breakfast included', name: 'nutrition-breakfast' },
	{ label: 'Breakfast, lunch, dinner', name: 'nutrition-all-meals' },
	{ label: 'Ultra all inclusive', name: 'nutrition-ultra-all-inclusive' }
]

const reservationCancellationPolicy: CheckboxItemProps[] = [
	{
		label: 'Free cancellation before check-in',
		name: 'cancellation-free-before'
	},
	{
		label: 'Free cancellation one week before check-in',
		name: 'cancellation-free-week'
	},
	{
		label: 'Free cancellation up to 3 days before check-in',
		name: 'cancellation-free-3days'
	},
	{ label: 'No possibility of cancellation', name: 'cancellation-none' }
]

const prepayment: CheckboxItemProps[] = [
	{ label: 'Booking without a credit card', name: 'prepayment-no-cc' },
	{ label: 'Partial prepayment', name: 'prepayment-partial' },
	{ label: 'Booking without prepayment', name: 'prepayment-none' },
	{ label: 'Full prepayment', name: 'prepayment-full' }
]

const formOfPayment: CheckboxItemProps[] = [
	{ label: 'Payment in cash', name: 'payment-cash' },
	{ label: 'Payment by card', name: 'payment-card' }
]

const specialOffersAndDiscounts: CheckboxItemProps[] = [
	{ label: 'Discounts of 50%', name: 'offers-50' },
	{ label: 'Hot offers', name: 'offers-hot-1' },
	{ label: 'Cheap options for relocation', name: 'offers-hot-2' }
]

export const globalFilter = [
	{ title: 'Preliminary filter', filter: preliminaryFilters },
	{ title: 'Popular filters', filter: popularFilters },
	{
		title: 'Amenities of the accommodation facility',
		filter: accommodationFacility
	},
	{
		title: 'Amenities for people with disabilities',
		filter: amenitiesForPeopleWithDisabilities
	},
	{ title: 'Room facilities', filter: roomFacilities },
	{
		title: 'Room facilities for people with disabilities',
		filter: roomFacilitiesForPeopleWithDisabilities
	},
	{ title: 'Nutrition', filter: nutrition },
	{
		title: 'Reservation cancellation policy',
		filter: reservationCancellationPolicy
	},
	{ title: 'Prepayment', filter: prepayment },
	{ title: 'Form of payment', filter: formOfPayment },
	{ title: 'Special offers and discounts', filter: specialOffersAndDiscounts }
]
