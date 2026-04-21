PlayerEvents.respawned(event => {
	let deathLoc = event.player.nbt.LastDeathLocation;

	event.player.tell("Welcome Back");
	event.player.tell("Last death: " + deathLoc.pos);
	event.player.tell("DeathDim: " + deathLoc.dimension);

	let recallGem = Item.of(
		'kubejs:recall_gem',{
			"minecraft:custom_data":{
				"recall_gem:deathCoords":{
					"x": deathLoc.pos[0],
					"y": deathLoc.pos[1],
					"z": deathLoc.pos[2]
				},
				"recall_gem:dimension":deathLoc.dimension
			}
		}
	);

	event.player.give(recallGem);

})

ItemEvents.rightClicked('kubejs:enchanted_recall_gem', event =>{
	let player = event.player;
	let item = event.item;

	if(item.getCustomData() != null){
		let coords = item.getCustomData().get("recall_gem:deathCoords");
		let dim = item.getCustomData().get("recall_gem:dimension");
		dim = dim + "";
		dim = dim.replace('"','').replace('"','');

		if((coords != null) && (dim != null)){
			let serverLevel = event.server.getLevel(dim);

			player.teleportTo(
				serverLevel,
				coords.x, coords.y, coords.z,
				 "x_rot", player.yaw, player.pitch
			);
			item.shrink(1);
			let potion = player.potionEffects
					
					//potion.add(effect, duration, amplifier, ambient, showParticles)
					potion.add(
						'minecraft:resistance',
						300, 5, true, false
					)
					potion.add(
						'minecraft:invisibility',
						300, 5, true, false
					)
					potion.add(
						'minecraft:water_breathing',
						300, 5, true, false
					)
		}
	}
})

ItemEvents.rightClicked('kubejs:recall_gem', event =>{
	let player = event.player;
	let item = event.item;

	if(item.getCustomData() != null){
		let coords = item.getCustomData().get("recall_gem:deathCoords");
		let dim = item.getCustomData().get("recall_gem:dimension");
		dim = dim + "";
		dim = dim.replace('"','').replace('"','');

		if((coords != null) && (dim != null)){
			player.tell(coords);
			player.tell(dim);
		}
	}
})

ServerEvents.recipes(event => {
	event.shapeless(
		'kubejs:enchanted_recall_gem',
		[
			'kubejs:recall_gem',
			'minecraft:ender_pearl'
		]
	).modifyResult('recall_gem:enchant_gem')
})

ServerEvents.modifyRecipeResult('recall_gem:enchant_gem', event=>{

	let gem = event.grid.find('kubejs:recall_gem');

	const dim = gem
		.getCustomData()
		.get("recall_gem:dimension")
	const coords = gem
		.getCustomData()
		.get("recall_gem:deathCoords")

	if((coords != null)&&(dim != null)){
		let recallGem = Item.of(
			'kubejs:enchanted_recall_gem',{
				"minecraft:custom_data":{
					"recall_gem:deathCoords":coords,
					"recall_gem:dimension":dim
				}
			}
		);

		event.success(recallGem)
	}

	event.success(Item.of('kubejs:recall_gem'));

})