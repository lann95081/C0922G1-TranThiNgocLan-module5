import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  firstNum: number;
  secondNum: number;
  result: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  getAddition() {
    this.result = this.firstNum + this.secondNum;
  }

  getSubtraction() {
    this.result = this.firstNum - this.secondNum;
  }

  getMultiplication() {
    this.result = this.firstNum * this.secondNum;
  }

  getDivision() {
    if (this.secondNum === 0) {
      this.result = 'Không thể chia cho 0 !';
    } else {
      this.result = this.firstNum / this.secondNum;
    }
  }

}
