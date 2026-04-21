LootJS.modifiers(event => {

	function range(start, stop, step){
		return Array.from(
		{length: (stop - start) / step + 1},
		(_, i) => start + (i * step));
	}

	let lootingArray = range(0.025,1,0.01)

	let chargedCreeperDrop =
		LootEntry.of("minecraft:wither_skeleton_skull")
			.when(c =>
				c.matchDamageSource(source =>
					source.matchDirectEntity(entity =>{
						entity.anyType("#creepers");
						entity.nbt("{powered:1}");
					})
				)
			);

	let regularSkullDrop = 
		LootEntry.of("minecraft:wither_skeleton_skull")
			.when(c =>
				c.randomChanceWithEnchantment(
					"minecraft:looting",
					lootingArray
				)
			);

	let fallbackDrop =
		LootEntry.of("kubejs:charred_skull_fragment")



	event
		.addEntityLootModifier("minecraft:wither_skeleton")
		.removeLoot(Ingredient.all)
		.addAlternativesLoot(
			chargedCreeperDrop,
			regularSkullDrop,
			fallbackDrop			
		);
});

ServerEvents.recipes(event=> {

	event.shapeless(
		Item.of("kubejs:charred_skull_fragment", 9),
		["minecraft:wither_skeleton_skull"]
	)

	event.shapeless(
		"minecraft:wither_skeleton_skull",
		[Item.of("kubejs:charred_skull_fragment", 9)]
	)

})