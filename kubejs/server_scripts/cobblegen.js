LootJS.modifiers(event => {

	const obsidian = "minecraft:obsidian";

	event
		.addBlockModifier("kubejs:glowing_obsidian")
		.removeLoot(Ingredient.all)
		.addAlternativesLoot(obsidian);
});