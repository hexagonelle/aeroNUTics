ServerEvents.recipes(event => {
	
	event.remove({id:"cataclysm:new/pointed_icicle"})
	event.shapeless("yungscavebiomes:icicle",["cataclysm:pointed_icicle"])
	event.shapeless("cataclysm:pointed_icicle",["yungscavebiomes:icicle"])

});