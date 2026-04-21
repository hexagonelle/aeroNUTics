ServerEvents.recipes(event => {

	// remove default recipes
	event.remove({ type: 'create_mechanical_spawner:spawner' })

	let disableFluids = [
		"evoker",
		"parrot",
		"bat",
		"wolf",
		"villager",
		"pig",
		"fox",
		"cow",
		"bee",
		"rabbit",
		"panda",
		"horse",
		"chicken",
		"random_legacy",
		"enchantment_industry_experience",
		"enchantment_industry_hyper_experience"
	]

	for (let fluid of disableFluids) {
		event.remove({id: `create_mechanical_spawner:mixing/spawn_fluid_${fluid}`})
	}

	// BASE FLUIDS

	event.recipes.create.mixing(
		Fluid.of("create_mechanical_spawner:spawn_fluid_random", 100),
		[
			Fluid.of('minecraft:water', 90),
			Item.of('create:experience_nugget', 3)

		]
	).heated()

	event.recipes.create.mixing(
		Fluid.of("create_mechanical_spawner:spawn_fluid_random", 5000),
		[
			Fluid.of('minecraft:water', 4500),
			Item.of('create_enchantment_industry:super_experience_nugget', 10)
		]
	).superheated()

	// MOB FLUIDS

	event.recipes.create.mixing(
		Fluid.of("kubejs:spawn_fluid_guardian", 250),
		[
			Fluid.of("create_mechanical_spawner:spawn_fluid_random", 100),
			"minecraft:prismarine_shard"
		]
	).heated()

	event.recipes.create.mixing(
		Fluid.of("kubejs:spawn_fluid_phantom", 250),
		[
			Fluid.of("create_mechanical_spawner:spawn_fluid_random", 100),
			"minecraft:phantom_membrane"
		]
	).heated()

	event.recipes.create.mixing(
		Fluid.of("kubejs:spawn_fluid_shulker", 250),
		[
			Fluid.of("create_mechanical_spawner:spawn_fluid_random", 100),
			"minecraft:shulker_shell"
		]
	).heated()

	// MOB LOOTS

	let witherSkeletonLoot = [
			CreateItem.of("minecraft:coal",0.3333),
			CreateItem.of("minecraft:bone",0.3333),
			CreateItem.of("minecraft:bone",0.3333),
			CreateItem.of("minecraft:wither_skeleton_skull",0.025)
		];
	let piglinLoot = [];
	let magmaCubeLoot = [
			CreateItem.of("minecraft:magma_cream",0.2)
		];
	let drownedLoot = [
			CreateItem.of("minecraft:nautilus_shell",0.03),
			CreateItem.of("minecraft:rotten_flesh",0.3333),
			CreateItem.of("minecraft:rotten_flesh",0.3333)
		];
	let endermanLoot = [
			CreateItem.of("minecraft:ender_pearl"),
			CreateItem.of("minecraft:ender_pearl",0.1)
		];
	let witchLoot = [];
	let zombieLoot = [
			CreateItem.of("minecraft:rotten_flesh"),
			CreateItem.of("minecraft:rotten_flesh",0.1)
		];
	let spiderLoot = [
			CreateItem.of("minecraft:string",0.3333),
			CreateItem.of("minecraft:string",0.3333),
			CreateItem.of("minecraft:spider_eye"),
			CreateItem.of("minecraft:spider_eye",0.1)
		];
	let creeperLoot = [
			CreateItem.of("minecraft:gunpowder"),
			CreateItem.of("minecraft:gunpowder",0.1)
		];
	let skeletonLoot = [
			CreateItem.of("minecraft:bone"),
			CreateItem.of("minecraft:bone",0.1),
			CreateItem.of("minecraft:arrow",0.3333),
			CreateItem.of("minecraft:arrow",0.3333)
		];
	let slimeLoot = [
			CreateItem.of("minecraft:slime_ball",0.5),
			CreateItem.of("minecraft:slime_ball",0.5)
		];
	let blazeLoot = [
			CreateItem.of("minecraft:blaze_rod"),
			CreateItem.of("minecraft:blaze_rod",0.1)
		];
	let ghastLoot = [
			CreateItem.of("minecraft:ghast_tear"),
			CreateItem.of("minecraft:ghast_tear",0.1)
		];
	let guardianLoot = [
			CreateItem.of("minecraft:prismarine_shard"),
			CreateItem.of("minecraft:prismarine_shard",0.1),
			CreateItem.of("minecraft:prismarine_crystals",0.4)
		];
	let shulkerLoot = [
			CreateItem.of("minecraft:shulker_shell"),
			CreateItem.of("minecraft:shulker_shell",0.1)
		];
	let phantomLoot = [
			CreateItem.of("minecraft:phantom_membrane"),
			CreateItem.of("minecraft:phantom_membrane",0.1)
		];

	// MOB LIST
	let defaultNS = "create_mechanical_spawner";

	let mobsList = [
		{mobName:"wither_skeleton",fluid:"wither_skeleton",loot:witherSkeletonLoot,fluidNamespace:defaultNS},
		{mobName:"piglin",fluid:"pigling",loot:piglinLoot,fluidNamespace:defaultNS},
		{mobName:"magma_cube",fluid:"magma_cube",loot:magmaCubeLoot,fluidNamespace:defaultNS},
		{mobName:"drowned",fluid:"drowned",loot:drownedLoot,fluidNamespace:defaultNS},
		{mobName:"enderman",fluid:"enderman",loot:endermanLoot,fluidNamespace:defaultNS},
		{mobName:"witch",fluid:"witch",loot:witchLoot,fluidNamespace:defaultNS},
		{mobName:"zombie",fluid:"zombie",loot:zombieLoot,fluidNamespace:defaultNS},
		{mobName:"spider",fluid:"spider",loot:spiderLoot,fluidNamespace:defaultNS},
		{mobName:"creeper",fluid:"creeper",loot:creeperLoot,fluidNamespace:defaultNS},
		{mobName:"skeleton",fluid:"skeleton",loot:skeletonLoot,fluidNamespace:defaultNS},
		{mobName:"slime",fluid:"slime",loot:slimeLoot,fluidNamespace:defaultNS},
		{mobName:"blaze",fluid:"blaze",loot:blazeLoot,fluidNamespace:defaultNS},
		{mobName:"ghast",fluid:"ghast",loot:ghastLoot,fluidNamespace:defaultNS},
		{mobName:"guardian",fluid:"guardian",loot:guardianLoot,fluidNamespace:"kubejs"},
		{mobName:"shulker",fluid:"shulker",loot:shulkerLoot,fluidNamespace:"kubejs"},
		{mobName:"phantom",fluid:"phantom",loot:phantomLoot,fluidNamespace:"kubejs"}
	]

	for (let mob of mobsList) {
    	event.recipes.create_mechanical_spawner.spawner(
     		'minecraft:'+`${mob.mobName}`, Fluid.of(`${mob.fluidNamespace}:spawn_fluid_${mob.fluid}`, 100)
    	).processingTime(1000)
    	 .customLoot(mob.loot);
 	}

})