const loop = {
	step: 1 / 60,
	accumulator: 0,
	lastTime: 0,
	frameId: 0,
	updateCallbackFunc: undefined,
	drawCallbackFunc: undefined, 
	setSimulationDepth: function(fps){
		this.step = 1 / fps;
	},
	setUpdateCallback: function(updateFn){
		this.updateCallbackFunc = updateFn;
	},
	setDrawCallback: function(drawFn){
		this.drawCallbackFunc = drawFn;
	},
	init: function(){
		if (this.updateCallbackFunc === undefined){
			console.error("No update callback has been assigned yet!");
			return false;
		}
		if (this.drawCallbackFunc === undefined){
			console.error("No draw callback has been assigned yet!");
			return false;
		}
		this.frameId = requestAnimationFrame(this.kickStart.bind(this));
	},
	quit: function(){
		cancelAnimationFrame(this.frameId);
	},
	kickStart: function(elapsedTime){
		this.lastTime = elapsedTime;
		this.frameId = requestAnimationFrame(this.callback.bind(this));
	},
	callback: function(elapsedTime){
		this.frameId = requestAnimationFrame(this.callback.bind(this));
		const deltaTime = (elapsedTime - this.lastTime) / 1000;
		this.accumulator += deltaTime;
		while(this.accumulator > this.step){
			this.updateCallbackFunc(this.step);
			this.accumulator -= this.step;
		}
		this.drawCallbackFunc();
		this.lastTime = elapsedTime;
	},
}
