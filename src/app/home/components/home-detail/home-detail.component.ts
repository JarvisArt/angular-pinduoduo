import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { ImageSlider, Channel } from '../../../shared/components'
import { HomeService } from './../../services/home.service';
import { Ad, Product } from './../../../shared/domain/index';

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
  ad$: Observable<Ad>;
  products$: Observable<Product[]>;
  sub: Subscription;

  ngOnInit() {
    this.selectedTabLink$ = this.route.paramMap.pipe(
      filter(params => params.has('tabLink')),
      map(params => params.get('tabLink')),
    );
    this.imageSliders$ = this.service.getImageSliders();
    this.channels$ = this.service.getChannel();
    this.ad$ = this.selectedTabLink$.pipe(
      switchMap(tab => this.service.getAdByTab(tab)),
      filter(ads => ads.length > 0),
      map(ads => ads[0])
    )
    this.products$ = this.selectedTabLink$.pipe(
      switchMap(tab => this.service.getProductsByTab(tab))
    )

    this.sub = this.route.queryParamMap.subscribe(params => {
      console.log('查询参数', params)
    })
  }

  ngOnDestroy(): void {
    // 组件销毁时要取消订阅，不然会引起内存泄漏
    this.sub.unsubscribe();
  }
}
