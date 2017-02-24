import { Component, OnInit } from '@angular/core';

@Component({
	//moduleId: module.id,
	selector: 'hanoi',
	templateUrl: 'hanoi.component.html',
	styleUrls: ["hanoi.component.css"]
})
export class HanoiComponent {

	iterations: number = 0;
	disks: number = 3;
	A = []
	B = []
	C = []
	seconds: number = 1;
	doHanoi = function(disks: number, source: Array<number>, destination: Array<number>, spare: Array<number>,){
		setTimeout(() =>
		{
			this.iterations++;
			if (disks == 1) {
				this.move(source, destination);
				return;
			}
			this.doHanoi(disks - 1, source, spare, destination);
			this.move(source, destination);
			this.doHanoi(disks - 1, spare, destination, source);
		}, this.seconds * 1000);
	}

	move = function(source: Array<number>, destination: Array<number>){
		setTimeout(()=>{
			destination.unshift(source.shift());
		}, this.seconds * 1000);
	}

	populate = function(top: number): Array<number>{
		console.log("Populate Called");
		let returnMe: Array<number> = []; 
		for(let i: number = top; i > 0; i--){
			returnMe.push(i);
		}
		return returnMe;
	}

	hanoi = function(){
		console.log("Running Hannoi");
		this.iterations = 0;
		this.A = this.populate(this.disks);
		this.B = []
		this.C = []
		this.doHanoi(this.disks, this.A, this.C, this.B);
	}

	printArr = function(){
		console.log(this.A);
		console.log(this.B);
		console.log(this.C);
	}
}