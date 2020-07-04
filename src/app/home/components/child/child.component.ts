import { Component, OnInit, NgZone, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  _title;
  _time;
  @ViewChild('timeRef', { static: true }) timeRef: ElementRef;
  public get title(): string {
    console.log('脏值检测')
    return this._title;
  }

  public get time(): number {
    return this._time;
  }

  constructor(private ngZone: NgZone, private rd: Renderer2) {
    this._title = 'hi';
  }

  ngOnInit() {
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.rd.setProperty(this.timeRef.nativeElement, 'innerText', formatDate(Date.now(), 'HH:mm:ss:SSS', 'zh-Hans'));
      }, 100);
    });
  }

  handleClick() {

  }
}
