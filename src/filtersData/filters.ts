import {
	CheckboxFilterGroup,
	CheckboxItemProps
} from '../components/FilterModalContent/types'

const preliminaryFilters: CheckboxItemProps[] = [
	{
		label: 'Distance to the center 1 km',
		name: 'preliminary-center-1',
		checked: false
	},
	{ label: 'Guest rating 9+', name: 'preliminary-rating-9', checked: false },
	{ label: 'Hotels', name: 'preliminary-hotels', checked: false },
	{
		label: 'Distance to the center 3 km',
		name: 'preliminary-center-3',
		checked: false
	},
	{ label: '5 stars', name: 'preliminary-stars-5', checked: false },
	{
		label: 'Breakfast is included',
		name: 'breakfast',
		checked: false
	}
]

const popularFilters: CheckboxItemProps[] = [
	{ label: '5 stars', name: 'popular-stars-5', checked: false },
	{ label: 'Breakfast is included', name: 'breakfast', checked: false },
	{ label: 'Free booking', name: 'popular-free-booking', checked: false },
	{ label: '4 stars', name: 'popular-stars-4', checked: false },
	{
		label: 'Distance to the center 3 km',
		name: 'popular-center-3',
		checked: false
	},
	{ label: 'Guest rating 8+', name: 'popular-rating-8', checked: false }
]

const accommodationFacility: CheckboxItemProps[] = [
	{
		label: 'Transfer to/from the hotel',
		name: 'shuttle-service',
		checked: false
	},
	{
		label: 'Breakfast included',
		name: 'breakfast',
		checked: false
	},
	{ label: 'Smoking area', name: 'accommodation-smoking', checked: false },
	{
		label: 'Round-the-clock reception',
		name: 'accommodation-reception',
		checked: false
	},
	{ label: 'Restaurant', name: 'accommodation-restaurant', checked: false },
	{
		label: `Children's playground`,
		name: 'accommodation-playground',
		checked: false
	},
	{
		label: 'Early check-in',
		name: 'accommodation-early-checkin',
		checked: false
	},
	{ label: 'Swimming pool', name: 'pool', checked: false },
	{ label: 'Internet', name: 'wi-fi', checked: false },
	{
		label: 'Late check-in',
		name: 'accommodation-late-checkin',
		checked: false
	},
	{ label: 'Spa center/sauna', name: 'spa', checked: false },
	{ label: 'Security', name: 'accommodation-security', checked: false },
	{ label: 'Pets are allowed', name: 'pets-allowed', checked: false },
	{ label: 'Gym/fitness room', name: 'gym', checked: false },
	{ label: 'Lift', name: 'accommodation-lift', checked: false },
	{ label: 'Parking', name: 'parking', checked: false },
	{
		label: 'Conference rooms',
		name: 'accommodation-conference',
		checked: false
	},
	{ label: 'Eco-responsibility', name: 'accommodation-eco', checked: false }
]

const amenitiesForPeopleWithDisabilities: CheckboxItemProps[] = [
	{
		label: 'Entrance without steps',
		name: 'disabilities-entrance',
		checked: false
	},
	{ label: 'Parking', name: 'parking', checked: false },
	{ label: 'Lift', name: 'accommodation-lift', checked: false },
	{
		label: 'Entrance 81 cm wide',
		name: 'disabilities-entrance-81',
		checked: false
	},
	{
		label: 'Availability of a ramp',
		name: 'disabilities-ramp',
		checked: false
	},
	{ label: 'Handrails', name: 'disabilities-handrails', checked: false }
]

const roomFacilities: CheckboxItemProps[] = [
	{ label: 'Bath', name: 'room-bath', checked: false },
	{ label: 'Kitchen', name: 'room-kitchen', checked: false },
	{ label: 'Underfloor heating', name: 'heating', checked: false },
	{ label: 'Shower', name: 'room-shower', checked: false },
	{ label: 'Air Conditioning', name: 'air-conditioning', checked: false },
	{ label: 'Pets allowed', name: 'pets-allowed', checked: false },
	{ label: 'Coffee machine', name: 'coffee-tea-maker', checked: false },
	{ label: 'Iron', name: 'room-iron', checked: false },
	{ label: 'Baby bed', name: 'room-baby-bed', checked: false },
	{ label: 'Kettle', name: 'room-kettle', checked: false },
	{ label: 'Internet', name: 'wi-fi', checked: false },
	{ label: 'Balcony', name: 'room-balcony', checked: false },
	{ label: 'Fridge', name: 'room-fridge', checked: false },
	{ label: 'Workplace', name: 'room-workplace', checked: false }
]

const roomFacilitiesForPeopleWithDisabilities: CheckboxItemProps[] = [
	{
		label: 'Main door entrance width 81 cm',
		name: 'room-disabilities-main-door',
		checked: false
	},
	{
		label: 'Handrail in the shower',
		name: 'room-disabilities-shower-handrail',
		checked: false
	},
	{
		label: 'High toilet bowl',
		name: 'room-disabilities-high-toilet',
		checked: false
	},
	{
		label: 'Interior door width 81 cm',
		name: 'room-disabilities-interior-door',
		checked: false
	},
	{
		label: 'Bath/shower chair',
		name: 'room-disabilities-bath-chair',
		checked: false
	},
	{
		label: 'Instructions in Braille',
		name: 'room-disabilities-braille',
		checked: false
	},
	{
		label: 'Absence of steps',
		name: 'room-disabilities-no-steps',
		checked: false
	},
	{
		label: 'Barrier-free shower',
		name: 'room-disabilities-barrier-free-shower',
		checked: false
	},
	{
		label: 'Emergency cord in the bathroom',
		name: 'room-disabilities-emergency-bath',
		checked: false
	},
	{
		label: 'Handrail near the toilet',
		name: 'room-disabilities-toilet-handrail',
		checked: false
	},
	{
		label: 'Low washbasin',
		name: 'room-disabilities-low-washbasin',
		checked: false
	},
	{
		label: 'Emergency cord by the bedside',
		name: 'room-disabilities-emergency-bedside',
		checked: false
	}
]

const nutrition: CheckboxItemProps[] = [
	{ label: 'Room without meals', name: 'nutrition-no-meals', checked: false },
	{
		label: 'Breakfast and dinner',
		name: 'dinner',
		checked: false
	},
	{ label: 'All inclusive', name: 'all-inclusive', checked: false },
	{ label: 'Breakfast included', name: 'breakfast', checked: false },
	{
		label: 'Breakfast, lunch, dinner',
		name: 'lunch',
		checked: false
	},
	{
		label: 'Ultra all inclusive',
		name: 'nutrition-ultra-all-inclusive',
		checked: false
	}
]

const reservationCancellationPolicy: CheckboxItemProps[] = [
	{
		label: 'Free cancellation before check-in',
		name: 'free-cancellation',
		checked: false
	},
	{
		label: 'Free cancellation one week before check-in',
		name: 'cancellation-free-week',
		checked: false
	},
	{
		label: 'Free cancellation up to 3 days before check-in',
		name: 'cancellation-free-3days',
		checked: false
	},
	{
		label: 'No possibility of cancellation',
		name: 'cancellation-none',
		checked: false
	}
]

const prepayment: CheckboxItemProps[] = [
	{
		label: 'Booking without a credit card',
		name: 'prepayment-no-cc',
		checked: false
	},
	{ label: 'Partial prepayment', name: 'prepayment-partial', checked: false },
	{
		label: 'Booking without prepayment',
		name: 'prepayment-none',
		checked: false
	},
	{ label: 'Full prepayment', name: 'prepayment-full', checked: false }
]

const formOfPayment: CheckboxItemProps[] = [
	{ label: 'Payment in cash', name: 'payment-cash', checked: false },
	{ label: 'Payment by card', name: 'payment-card', checked: false }
]

const specialOffersAndDiscounts: CheckboxItemProps[] = [
	{ label: 'Discounts of 50%', name: 'offers-50', checked: false },
	{ label: 'Hot offers', name: 'offers-hot-1', checked: false },
	{
		label: 'Cheap options for relocation',
		name: 'offers-hot-2',
		checked: false
	}
]

export const globalFilter: CheckboxFilterGroup[] = [
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
