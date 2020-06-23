import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

export interface TopMenu {
  title: string,
  link: string
}

@Component({
  selector: 'app-scrollab-tab',
  templateUrl: './scrollab-tab.component.html',
  styleUrls: ['./scrollab-tab.component.css']
})
export class ScrollabTabComponent implements OnInit {

  selectIndex = -1;
  @Input() menus: TopMenu[] = [];
  @Input() backgroundColor = '#fff';
  @Input() titleActiveColor = 'yellow';
  @Input() titleColor = 'blue';
  @Input() indicatorColor = 'brown';
  @Output() tabSelected = new EventEmitter();
  constructor() {

  }

  ngOnInit(): void {

  }

  handleSelection(index: number) {
    this.selectIndex = index;
    this.tabSelected.emit(this.menus[this.selectIndex]);
  }
}
