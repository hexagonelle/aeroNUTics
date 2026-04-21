ServerEvents.recipes(event => {

	///////// FARMER'S DELIGHT x QUARK /////////

	// conflict with quark blackstone furnace
	event.remove({output:"nethersdelight:blackstone_furnace"});

	// change the quark charcoal to black dye recipe to require the cutting board
	// avoids conflict with mods that craft charcoal into tiny charcoal

	event.remove({id:"quark:tweaks/crafting/utility/misc/charcoal_to_black_dye"});

	event.recipes.farmersdelight.cutting(
		'minecraft:charcoal',
		'#c:tools/knife',
		[
			"minecraft:black_dye"
		]
	)

})