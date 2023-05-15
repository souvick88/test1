import { Component } from '@angular/core';

@Component({
  selector: 'app-test-content',
  templateUrl: './test-content.component.html',
  styleUrls: ['./test-content.component.scss']
})
export class TestContentComponent {
  number = 25;
  addNumber() {
    this.number = +  1;
  }
}
