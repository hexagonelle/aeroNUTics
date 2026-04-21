StartupEvents.registry("block", event => {

	function capitalize(val) {
		return String(val).charAt(0).toUpperCase() + String(val).slice(1);
	}

	function makeHueLamp(event,color,hexcode){
		event.create(color + "_hue_lamp")
			.displayName(capitalize(color) + " Hue Lamp") // Set a custom name
			.hardness(1.0) // Set hardness (affects mining time)
			.resistance(1.0) // Set resistance (to explosions, etc)
			.requiresTool(false) // Requires a tool or it won't drop (see tags below)
			.tagBlock("mineable/pickaxe") // pickaxe
			.soundType("glass")
			.mapColor("COLOR_" + color.toUpperCase())
			.lightLevel(1)
			.opaque(true)
			.color(1, color)
			.tagBoth("forge:hue_lamp")
	}

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

	const hexColors = [
		"#ffffff",
		"#ffffff",
		"#ffffff",
		"#ffffff",
		"#ff8000",
		"#ff0000",
		"#ff8000",
		"#ffff00",
		"#80ff00",
		"#04ff00",
		"#00ffaa",
		"#00ffff",
		"#0000ff",
		"#8000ff",
		"#ff00ff",
		"#ff88cc"
	]

	const colorList = minecraftColors.map((e,i)=>[e,hexColors[i]]);

	colorList.forEach(color => {
		makeHueLamp(event,color[0],color[1]);
	})
})