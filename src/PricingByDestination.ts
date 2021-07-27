type DestinationType =
	| 'AMBATO'
	| 'ANCONCITO'
	| 'AZOGUEZ'
	| 'AYANGUE'
	| 'BABAHOYO'
	| 'BAÑOS'
	| 'BALLENITA'
	| 'BAHIA'
	| 'BUCAY'
	| 'CANOA'
	| 'CHONGON'
	| 'CUENCA'
	| 'DAULE'
	| 'ESMERALDS'
	| 'GUARANDA'
	| 'HUAQUILLAS'
	| 'IBARRA'
	| 'JIPIJAPA'
	| 'LIBERTAD'
	| 'MANCORA'
	| 'MANGLARALTO'
	| 'MANTA'
	| 'MILAGRO'
	| 'MONTAÑITA'
	| 'OLON'
	| 'PEDRO CARBO'
	| 'PLAYA'
	| 'POSORJA'
	| 'PTO. LOPEZ'
	| 'PTO. CAYO'
	| 'PUNTA CARNERO'
	| 'QUITO'
	| 'SALITRE'
	| 'SALINAS'
	| 'SAMBORODON'
	| 'TRONCAL'
	| 'YAGUACHI';

const Destination: DestinationType[] = [
	'AMBATO',
	'ANCONCITO',
	'AZOGUEZ',
	'AYANGUE',
	'BABAHOYO',
	'BAÑOS',
	'BALLENITA',
	'BAHIA',
	'BUCAY',
	'CANOA',
	'CHONGON',
	'CUENCA',
	'DAULE',
	'ESMERALDS',
	'GUARANDA',
	'HUAQUILLAS',
	'IBARRA',
	'JIPIJAPA',
	'LIBERTAD',
	'MANCORA',
	'MANGLARALTO',
	'MANTA',
	'MILAGRO',
	'MONTAÑITA',
	'OLON',
	'PEDRO CARBO',
	'PLAYA',
	'POSORJA',
	'PTO. LOPEZ',
	'PTO. CAYO',
	'PUNTA CARNERO',
	'QUITO',
	'SALITRE',
	'SALINAS',
	'SAMBORODON',
	'TRONCAL',
	'YAGUACHI',
];

type DestinationInfo = {
	priceOneWay: number;
	priceTwoWays: number;
	waitTime: number;
	kilometers: number;
};

export const LocationMap = new Map<DestinationType, DestinationInfo>([
	[
		'AMBATO',
		{
			priceOneWay: 180,
			priceTwoWays: 220,
			waitTime: 2,
			kilometers: 295,
		},
	],
	[
		'ANCONCITO',
		{
			priceOneWay: 180,
			priceTwoWays: 220,
			waitTime: 2,
			kilometers: 295,
		},
	],
	[
		'AZOGUEZ',
		{
			priceOneWay: 180,
			priceTwoWays: 220,
			waitTime: 2,
			kilometers: 295,
		},
	],
	[
		'AYANGUE',
		{
			priceOneWay: 180,
			priceTwoWays: 220,
			waitTime: 2,
			kilometers: 295,
		},
	],
	[
		'BABAHOYO',
		{
			priceOneWay: 180,
			priceTwoWays: 220,
			waitTime: 2,
			kilometers: 295,
		},
	],
	[
		'BAÑOS',
		{
			priceOneWay: 180,
			priceTwoWays: 220,
			waitTime: 2,
			kilometers: 295,
		},
	],
	[
		'BALLENITA',
		{
			priceOneWay: 180,
			priceTwoWays: 220,
			waitTime: 2,
			kilometers: 295,
		},
	],
	[
		'BAHIA',
		{
			priceOneWay: 180,
			priceTwoWays: 220,
			waitTime: 2,
			kilometers: 295,
		},
	],
	[
		'BUCAY',
		{
			priceOneWay: 180,
			priceTwoWays: 220,
			waitTime: 2,
			kilometers: 295,
		},
	],
	[
		'CANOA',
		{
			priceOneWay: 180,
			priceTwoWays: 220,
			waitTime: 2,
			kilometers: 295,
		},
	],
	[
		'CHONGON',
		{
			priceOneWay: 180,
			priceTwoWays: 220,
			waitTime: 2,
			kilometers: 295,
		},
	],
	[
		'CUENCA',
		{
			priceOneWay: 180,
			priceTwoWays: 220,
			waitTime: 2,
			kilometers: 295,
		},
	],
	[
		'DAULE',
		{
			priceOneWay: 180,
			priceTwoWays: 220,
			waitTime: 2,
			kilometers: 295,
		},
	],
	[
		'ESMERALDS',
		{
			priceOneWay: 180,
			priceTwoWays: 220,
			waitTime: 2,
			kilometers: 295,
		},
	],
	[
		'GUARANDA',
		{
			priceOneWay: 180,
			priceTwoWays: 220,
			waitTime: 2,
			kilometers: 295,
		},
	],
	[
		'HUAQUILLAS',
		{
			priceOneWay: 180,
			priceTwoWays: 220,
			waitTime: 2,
			kilometers: 295,
		},
	],
	[
		'IBARRA',
		{
			priceOneWay: 180,
			priceTwoWays: 220,
			waitTime: 2,
			kilometers: 295,
		},
	],
	[
		'JIPIJAPA',
		{
			priceOneWay: 180,
			priceTwoWays: 220,
			waitTime: 2,
			kilometers: 295,
		},
	],
	[
		'LIBERTAD',
		{
			priceOneWay: 180,
			priceTwoWays: 220,
			waitTime: 2,
			kilometers: 295,
		},
	],
	[
		'MANCORA',
		{
			priceOneWay: 180,
			priceTwoWays: 220,
			waitTime: 2,
			kilometers: 295,
		},
	],
	[
		'MANGLARALTO',
		{
			priceOneWay: 180,
			priceTwoWays: 220,
			waitTime: 2,
			kilometers: 295,
		},
	],
	[
		'MANTA',
		{
			priceOneWay: 180,
			priceTwoWays: 220,
			waitTime: 2,
			kilometers: 295,
		},
	],
	[
		'MILAGRO',
		{
			priceOneWay: 180,
			priceTwoWays: 220,
			waitTime: 2,
			kilometers: 295,
		},
	],
	[
		'MONTAÑITA',
		{
			priceOneWay: 180,
			priceTwoWays: 220,
			waitTime: 2,
			kilometers: 295,
		},
	],
	[
		'OLON',
		{
			priceOneWay: 180,
			priceTwoWays: 220,
			waitTime: 2,
			kilometers: 295,
		},
	],
	[
		'PEDRO CARBO',
		{
			priceOneWay: 180,
			priceTwoWays: 220,
			waitTime: 2,
			kilometers: 295,
		},
	],
	[
		'PLAYA',
		{
			priceOneWay: 180,
			priceTwoWays: 220,
			waitTime: 2,
			kilometers: 295,
		},
	],
	[
		'POSORJA',
		{
			priceOneWay: 180,
			priceTwoWays: 220,
			waitTime: 2,
			kilometers: 295,
		},
	],
	[
		'PTO. LOPEZ',
		{
			priceOneWay: 180,
			priceTwoWays: 220,
			waitTime: 2,
			kilometers: 295,
		},
	],
	[
		'PTO. CAYO',
		{
			priceOneWay: 180,
			priceTwoWays: 220,
			waitTime: 2,
			kilometers: 295,
		},
	],
	[
		'PUNTA CARNERO',
		{
			priceOneWay: 180,
			priceTwoWays: 220,
			waitTime: 2,
			kilometers: 295,
		},
	],
	[
		'QUITO',
		{
			priceOneWay: 180,
			priceTwoWays: 220,
			waitTime: 2,
			kilometers: 295,
		},
	],
	[
		'SALITRE',
		{
			priceOneWay: 180,
			priceTwoWays: 220,
			waitTime: 2,
			kilometers: 295,
		},
	],
	[
		'SALINAS',
		{
			priceOneWay: 180,
			priceTwoWays: 220,
			waitTime: 2,
			kilometers: 295,
		},
	],
	[
		'SAMBORODON',
		{
			priceOneWay: 180,
			priceTwoWays: 220,
			waitTime: 2,
			kilometers: 295,
		},
	],
	[
		'TRONCAL',
		{
			priceOneWay: 180,
			priceTwoWays: 220,
			waitTime: 2,
			kilometers: 295,
		},
	],
	[
		'YAGUACHI',
		{
			priceOneWay: 180,
			priceTwoWays: 220,
			waitTime: 2,
			kilometers: 295,
		},
	],
]);
