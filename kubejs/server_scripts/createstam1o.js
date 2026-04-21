ServerEvents.recipes(event => {

	// Get zinc nuggets by crushing tuff
	event.recipes.create.crushing(Item.of('create:zinc_nugget',3),
		'minecraft:tuff'
	).processingTime(200)


	// Netherrack recipe
	event.recipes.create.mixing('minecraft:netherrack',
		[
			'minecraft:stone',
			'minecraft:nether_wart'
		]
	).heated()

	// Tuff recipe
	event.recipes.create.mixing('minecraft:tuff',
		[
			'minecraft:andesite',
			'minecraft:cobblestone',
			Fluid.lava(4000)
		]
	)

	// Haunt feathers into phantom membranes
	event.recipes.create.haunting('minecraft:phantom_membrane',
		'minecraft:feather'
	)

	// Blast prismarine shards into blue dye
	event.blasting('minecraft:blue_dye',
		'minecraft:prismarine_shard'
	)

	// Mix hanging roots and dirt for rooted dirt
	event.recipes.create.mixing('minecraft:rooted_dirt',
		[
			'minecraft:dirt',
			'minecraft:hanging_roots'

		]
	)

	// Saw mushroom blocks into mushroom stems
	event.recipes.create.cutting('minecraft:mushroom_stem',
		'minecraft:brown_mushroom_block'
	)

	// Saw mushroom blocks into mushroom stems
	event.recipes.create.cutting('minecraft:mushroom_stem',
		'minecraft:red_mushroom_block'
	)

	// Dripstone from granite, cobble, and lava
	event.recipes.create.mixing('minecraft:dripstone_block',
		[
			'minecraft:granite',
			'minecraft:cobblestone',
			Fluid.lava(4000)
		]
	)

	// Compact mushrooms into mushroom blocks
	event.recipes.create.compacting(
		'minecraft:brown_mushroom_block',
		[
			Item.of('minecraft:brown_mushroom',4)
		]
	)

	// Compact mushrooms into mushroom blocks
	event.recipes.create.compacting(
		'minecraft:red_mushroom_block',
		[
			Item.of('minecraft:red_mushroom',4)
		]
	)

	// Remove default  dripstone milling recipe
	event.remove({ id:"create:milling/dripstone_block" })

	// Get copper and clay by crushing dripstone
	event.recipes.create.crushing(
		[
			Item.of('minecraft:clay_ball'),
			Item.of('create:copper_nugget',3)
		],
		'minecraft:dripstone_block'
	).processingTime(200)

	// Get copper and clay by milling dripstone
	event.recipes.create.milling(
		[
			Item.of('minecraft:clay_ball'),
			Item.of('create:copper_nugget',3)
		],
		'minecraft:dripstone_block'
	)

	// Get lapis by mixing quartz and blue dye
	event.recipes.create.mixing('minecraft:lapis_lazuli',
		[
			'minecraft:quartz',
			'minecraft:blue_dye'
		]
	)

})