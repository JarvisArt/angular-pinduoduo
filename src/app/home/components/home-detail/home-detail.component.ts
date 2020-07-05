import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ImageSlider, Channel } from '../../../shared/components'
import { HomeService } from './../../services/home.service';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute, private service: HomeService, private cd: ChangeDetectorRef) { }
  selectedTabLink$: Observable<string>;
  imageSliders$: Observable<ImageSlider[]>;
  channels$: Observable<Channel[]>;
  sub: Subscription;

  ngOnInit() {
    this.selectedTabLink$ = this.route.paramMap.pipe(
      map(params => params.get('tabLink')),
      tap(params => {
        console.log(params)
      })
    );
    this.sub = this.route.queryParamMap.subscribe(params => {
      console.log('查询参数', params)
    })
    this.imageSliders$ = this.service.getImageSliders();
    this.channels$ = this.service.getChannel();
  }

  ngOnDestroy(): void {
    // 组件销毁时要取消订阅，不然会引起内存泄漏
    this.sub.unsubscribe();
  }
}
