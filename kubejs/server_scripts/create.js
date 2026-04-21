//////// CREATE RECIPES /////////

ServerEvents.recipes(event => {

	// remove create tuff crushing
	event.remove({ id:"create:crushing/tuff" })
	event.remove({ id:"create:crushing/tuff_recycling" })
    
    //remove scoria & scorchia recipes,
    //to make resources from them rarer
	event.remove({ id:"create:crafting/palettes/scorchia" })
	event.remove({ id:"create:smelting/scoria" })
    
    //redundant recipe
	event.remove({ id:"create:crushing/asurine" })
	event.remove({ id:"create:crushing/crimsite" })
	event.remove({ id:"create:crushing/ochrum" })
	event.remove({ id:"create:crushing/veridium" })

	// easier chain crafting
	event.remove({id:"create:crafting/appliances/chain_from_zinc"});
	event.shaped(
		Item.of('minecraft:chain', 8),
		[
			'A',
			'B',
			'A'
		],
		{
			A: 'create:zinc_nugget',
			B: 'create:zinc_ingot'
		}
	)

	// blast zinc blocks
	event.blasting("create:zinc_block", "create:raw_zinc_block")
	
	// Splashing recipe to turn bone blocks into calcite
	// Purely for convenience
	event.recipes.create.splashing('calcite', 'bone_block')

	// // Recipe to obtain netherite scrap via crushing
	// event.recipes.create.crushing(
	// 	[
	// 		'minecraft:flint',
	// 		Item.of('minecraft:netherite_scrap').withChance(0.001)
	// 	],
	// 	'#create:stone_types/scoria'
	// ).processingTime(1000)

	//processing experience
	event.recipes.create.compacting(
		[
			Item.of('create:experience_nugget',2),
			CreateItem.of('create:experience_nugget',0.5)
		],
		'minecraft:infested_stone'
	)

	// Recipe to obtain pointed dripstone via crushing dripstone
	event.recipes.create.crushing('4x minecraft:pointed_dripstone', 'minecraft:dripstone_block')

	// Allowing milling gravel innto sand
	event.remove({ id:"create:milling/gravel" })
	event.recipes.create.milling('minecraft:sand', 'minecraft:gravel')

	// Recipe to obtain ancient debris via compacting
	event.recipes.create.compacting(
		'minecraft:ancient_debris',
		[
			Fluid.lava(100),
			'4x minecraft:netherite_scrap',
			'8x create:scoria'
		]
	).superheated()

	// Reconstitute netherrack from cinder flour
	event.recipes.create.mixing('minecraft:diorite',
		[
			'minecraft:quartz',
			'minecraft:cobblestone'
		]
	)

	// Reconstitute netherrack from cinder flour
	event.recipes.create.mixing('minecraft:netherrack',
		[
			'create:cinder_flour',
			'minecraft:gravel'
		]
	).heated()
	
	// Add recipe to get dirt from path
	event.recipes.create.deploying(
		['minecraft:dirt'], ['minecraft:dirt_path', 'minecraft:dirt']
	).keepHeldItem()

	event.recipes.create.cutting(
		Item.of('quark:blossom_planks_slab',2),
		'quark:blossom_planks'
	).processingTime(60);

})