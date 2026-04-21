LootJS.modifiers(event => {

// remove components of unused eyes
	event
		.addEntityModifier("minecraft:witch")
		.removeLoot("endrem:witch_pupil");

	event
		.addEntityModifier("minecraft:skeleton_horse")
		.removeLoot("endrem:undead_soul");

// make eyes less grindy by increasing odds to 100%

	event
		.addTableModifier("minecraft:chests/desert_pyramid")
		.removeLoot("endrem:old_eye")
		.addLoot("endrem:old_eye");

	//rates of nether eye in fortress are reasonable

	event
		.addTableModifier("minecraft:chests/igloo_chest")
		.removeLoot("endrem:cold_eye")
		.addLoot("endrem:cold_eye");

	event
		.addTableModifier("minecraft:chests/jungle_temple")
		.removeLoot("endrem:rogue_eye")
		.addLoot("endrem:rogue_eye");

	//rates of black eye in buried treasure are reasonable

	event
		.addTableModifier("minecraft:chests/woodland_mansion")
		.removeLoot("endrem:magical_eye")
		.randomChance(0.15)
		.addLoot("endrem:magical_eye");

	event
		.addTableModifier("minecraft:chests/abandoned_mineshaft")
		.removeLoot("endrem:lost_eye")
		.randomChance(0.15)
		.addLoot("endrem:lost_eye");

	event
		.addTableModifier("minecraft:chests/pillager_outpost")
		.removeLoot("endrem:corrupted_eye")
		.randomChance(0.15)
		.addLoot("endrem:corrupted_eye");

	event
		.addEntityModifier("minecraft:wither")
		.removeLoot("endrem:wither_eye")
		.addLoot("endrem:wither_eye");

	event
		.addEntityModifier("minecraft:elder_guardian")
		.removeLoot("endrem:guardian_eye")
		.addLoot("endrem:guardian_eye");

	event
		.addTableModifier("minecraft:chests/bastion_treasure")
		.removeLoot("endrem:cursed_eye")
		.randomChance(0.15)
		.addLoot("endrem:cursed_eye");

	event
		.addTableModifier("minecraft:chests/ancient_city")
		.removeLoot("endrem:evil_eye")
		.randomChance(0.15)
		.addLoot("endrem:evil_eye");


})