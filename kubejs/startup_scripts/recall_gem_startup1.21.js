// Listen to item registry event
StartupEvents.registry('item', event => {
	event.create('enchanted_recall_gem')
		.maxStackSize(1)
		.glow(true)
		// .useAnimation('bow')
		// .useDuration(itemstack => 64)
		// .use((level, player, hand) => true)
		// .finishUsing((itemstack, level, entity) => {
		// 	if(itemstack.getCustomData() != null){
		// 		let coords = itemstack.getCustomData().get("recall_gem:deathCoords");
		// 		let dim = itemstack.getCustomData().get("recall_gem:dimension");
		// 		// itemstack.shrink(1)
		// 		if(coords != null){
		// 			if (entity.player) {
		// 				// entity.teleportTo(
		// 				//	 thing,
		// 				//	 coords.x, coords.y, coords.z,
		// 				//	 0.0,0.0
		// 				// );
		// 				entity.tell(entity.getLevel("minecraft:overworld"))
		// 			}
		// 		}
		// 	}
		// 	return itemstack
		// })

	event.create('recall_gem')
		.maxStackSize(1)
		.glow(false)
})