ServerEvents.recipes(event => {

	// overlap with create
	event.remove({id:"embers:copper_nugget_to_ingot"})

	// get silver from asurine
	event.remove({id:"create:crushing/asurine_recycling"})
	event.recipes.create.crushing(
		[
			Item.of('create:crushed_raw_zinc').withChance(0.3),
			Item.of('create:zinc_nugget').withChance(0.3),
			Item.of('create:crushed_raw_silver').withChance(0.05),
			Item.of('embers:silver_nugget').withChance(0.05)
		],
		'#create:stone_types/asurine'
	).processingTime(500).id("create:crushing/asurine_recycling")

	// remove embers plate-crafting with hammer

	event.remove({id:"embers:lead_plate_hammering"})
	event.remove({id:"embers:silver_plate_hammering"})
	event.remove({id:"embers:dawnstone_plate_hammering"})
	event.remove({id:"embers:iron_plate_hammering"})
	event.remove({id:"embers:copper_plate_hammering"})
});