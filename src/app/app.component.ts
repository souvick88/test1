import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TestContentComponent } from './test-content/test-content.component';
import { TestModalComponent } from './test-modal/test-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  // @ViewChild(TestContentComponent)
  // testContent!: TestContentComponent;


  title = 'ng-mat-test';
  toggleElem: boolean = false;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    setTimeout(() => {
      this.toggleElem = true;
      console.log(this.toggleElem)
    }, 1000)
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      // console.log("testcontent", this.testContent.number)
    }, 0);
  }

  openModal() {
    this.dialog.open(TestModalComponent)
  }

  addNumber(content: TestContentComponent) {
    content.addNumber();
  }


}
