ServerEvents.recipes(event=> {
	const minecraftColors = [
		"white",
		"light_gray",
		"gray",
		"black",
		"brown",
		"red",
		"orange",
		"yellow",
		"lime",
		"green",
		"cyan",
		"light_blue",
		"blue",
		"purple",
		"magenta",
		"pink"
	];


	event.shaped(
			'kubejs:white_hue_lamp',
			[
				'AAA',
				'ABA',
				'AAA'
			],
			{
				A: 'minecraft:glass_pane',
				B: 'minecraft:glowstone'
			}
		)

	function hueLampRecipe(event,color){
		event.shapeless(
			'kubejs:' + color + '_hue_lamp',
			['#forge:hue_lamp', "minecraft:" + color + "_dye"]
		)
	}

	minecraftColors.forEach(color =>{
		hueLampRecipe(event,color)
	})
})