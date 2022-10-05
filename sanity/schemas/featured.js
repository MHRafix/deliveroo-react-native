export default {
	name: 'featured',
	title: 'Featured Menu categories',
	type: 'document',
	fields: [
		{
			name: 'name',
			type: 'string',
			title: 'Featured Category name',
			validation: (Rule) => Rule.required(),
		},

		{
			name: 'short_description',
			type: 'string',
			title: 'short_description',
			validation: (Rule) => Rule.max(200),
		},
		{
			name: 'resturants',
			type: 'array',
			title: 'Resturant',
			of: [
				{
					type: 'reference',
					to: [
						{
							type: 'resturant',
						},
					],
				},
			],
		},
	],
};
