ServerEvents.recipes(event => {
	
	const flameBase = "additional_lights:fire_for_"
	const soulFlameBase = "additional_lights:soul_fire_for_"

	const small_torch_flame = "standing_torch_s"
	const large_torch_flame = "standing_torch_l"
	const small_pit_flame = "fire_pit_s"
	const large_pit_flame = "fire_pit_l"

	event.remove({id:flameBase + small_torch_flame})
	event.remove({id:flameBase + large_torch_flame})
	event.remove({id:flameBase + small_pit_flame})
	event.remove({id:flameBase + large_pit_flame})

	event.remove({id:soulFlameBase + small_torch_flame})
	event.remove({id:soulFlameBase + large_torch_flame})
	event.remove({id:soulFlameBase + small_pit_flame})
	event.remove({id:soulFlameBase + large_pit_flame})


	event.shapeless(
		flameBase + small_torch_flame,
		["minecraft:flint_and_steel","#minecraft:coals"]
	).damageIngredient("#minecraft:axes");

	event.shapeless(
		flameBase + large_torch_flame,
		["minecraft:flint_and_steel","2x #minecraft:coals"]
	).damageIngredient("#minecraft:axes");

	event.shapeless(
		flameBase + small_pit_flame,
		["minecraft:flint_and_steel","3x #minecraft:coals"]
	).damageIngredient("#minecraft:axes");

	event.shapeless(
		flameBase + large_pit_flame,
		["minecraft:flint_and_steel","4x #minecraft:coals"]
	).damageIngredient("#minecraft:axes");


	event.shapeless(
		soulFlameBase + small_torch_flame,
		["minecraft:flint_and_steel","#minecraft:coals", "minecraft:soul_sand"]
	).damageIngredient("#minecraft:axes");

	event.shapeless(
		soulFlameBase + large_torch_flame,
		["minecraft:flint_and_steel","2x #minecraft:coals", "minecraft:soul_sand"]
	).damageIngredient("#minecraft:axes");

	event.shapeless(
		soulFlameBase + small_pit_flame,
		["minecraft:flint_and_steel","3x #minecraft:coals", "minecraft:soul_sand"]
	).damageIngredient("#minecraft:axes");

	event.shapeless(
		soulFlameBase + large_pit_flame,
		["minecraft:flint_and_steel","4x #minecraft:coals", "minecraft:soul_sand"]
	).damageIngredient("#minecraft:axes");

});