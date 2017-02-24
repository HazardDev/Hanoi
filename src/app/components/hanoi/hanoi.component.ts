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
	disks: number = 3;
	A = []
	B = []
	C = []
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
		console.log("Running Hannoi");
		this.iterations = 0;
		this.A = this.populate(this.disks);
		this.B = []
		this.C = []
		this.viewState = [{A: [], B: [], C: []}]
		this.doHanoi(this.disks, this.A, this.B, this.C);
	}

	printArr = function () {
		console.log(this.A);
		console.log(this.B);
		console.log(this.C);
		console.log(this.viewState);

	}

	changeView = function () {
		console.log("Change View Called");
		console.log(this.viewState);
		console.log(this.viewState.length);
		for(let i = 0; i < this.viewState.length; i++){
			console.log("In the for loop");
			setTimeout(() => {
				console.log("In the timeout")
				console.log(this.viewState);
				this.viewState.shift();
			}, 1000 * this.seconds * i);
		}
	}
}