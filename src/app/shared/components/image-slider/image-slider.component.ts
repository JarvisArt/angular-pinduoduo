import { Component, OnInit, Input, ViewChild, ElementRef, ChangeDetectionStrategy, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

export interface ImageSlider {
  imgUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageSliderComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() sliders: ImageSlider[] = [];
  @Input() sliderHeight = '160px';
  @Input() intervalBySeconds = 2;
  selectedIndex = 0;
  intervalId;
  @ViewChild('imageSlider', { static: true }) imgSlider: ElementRef;
  constructor(private rd2: Renderer2) { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.intervalId = setInterval(() => {
      this.rd2.setProperty(this.imgSlider.nativeElement, 'scrollLeft',
      ((this.getIndex(++this.selectedIndex) % this.sliders.length) * this.imgSlider.nativeElement.scrollWidth) / this.sliders.length)
    }, this.intervalBySeconds * 1000)
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  getIndex(idx: number): number {
    return idx >= 0
      ? idx % this.sliders.length
      : this.sliders.length - (Math.abs(idx) % this.sliders.length)
  }

  handleScroll(ev) {
    const ratio = (ev.target.scrollLeft * this.sliders.length) / ev.target.scrollWidth;
    this.selectedIndex = Math.round(ratio);
  }
}
