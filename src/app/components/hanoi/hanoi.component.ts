import { Component, OnInit, NgZone } from '@angular/core';

@Component({
	//moduleId: module.id,
	selector: 'hanoi',
	templateUrl: 'hanoi.component.html',
	styleUrls: ["hanoi.component.css"]
})
export class HanoiComponent {

	constructor(private zone: NgZone){}

	iterations: number = 0;
	disks: number = 2;
	A = []
	B = []
	C = []
	isRunning: boolean = false;
	viewState = [{A: [], B: [], C: []}]
	seconds: number = 1;
	doHanoi = function (disks: number, source: Array<number>, using: Array<number>, destination: Array<number>, ) {
				//console.log(this.iterations);
		this.iterations++;
		if (disks == 1) {
			this.move(source, destination);
			return;
		}
		this.doHanoi(disks - 1, source, destination, using);
		this.move(source, destination);
		this.doHanoi(disks - 1, using, source, destination);

	}

	move = function (source: Array<number>, destination: Array<number>) {
		this.viewState.push({A: this.A.slice(), B: this.B.slice(), C: this.C.slice()});
		destination.unshift(source.shift());
	}

	populate = function (top: number): Array<number> {
		let returnMe: Array<number> = [];
		for (let i: number = top; i > 0; i--) {
			returnMe.unshift(i);
		}
		return returnMe;
	}

	hanoi = function () {
		// console.log("Running Hannoi");
		if(this.isRunning) return;
		this.isRunning = true;
		this.iterations = 0;
		if(!this.disks) this.disks = 6;
		this.A = this.populate(this.disks);
		this.B = []
		this.C = []
		this.viewState = [{A: [], B: [], C: []}]
		this.doHanoi(this.disks, this.A, this.B, this.C);
		this.viewState.push({A: [], B: [], C: this.C.slice()});
		this.changeView();
	}

	printArr = function () {
		console.log(this.A);
		console.log(this.B);
		console.log(this.C);
		console.log(this.viewState);
		//For debugging purposes
	}

	changeView = function () {
		// console.log("Change View Called");
		// console.log(this.viewState);
		// console.log(this.viewState.length);
		for(let i = 0; i < this.viewState.length - 1; i++){
			// console.log("In the for loop.");
			setTimeout(() => {
			
				this.viewState.shift();
				if(this.viewState.length == 1){
					this.isRunning = false;
				}
				
			}, 1000 * this.seconds * i);
		}
	}
}