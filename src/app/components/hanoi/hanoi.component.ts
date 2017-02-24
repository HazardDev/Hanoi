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
		setTimeout(() => {
			destination.unshift(source.shift());
		}, 1000)
	}

	populate = function (top: number): Array<number> {
		let returnMe: Array<number> = [];
		for (let i: number = top; i > 0; i--) {
			returnMe.push(i);
		}
		return returnMe;
	}

	hanoi = function () {
		console.log("Running Hannoi");
		this.iterations = 0;
		this.A = this.populate(this.disks);
		this.B = []
		this.C = []
		this.doHanoi(this.disks, this.A, this.B, this.C);
	}

	printArr = function () {
		console.log(this.A);
		console.log(this.B);
		console.log(this.C);
	}
}