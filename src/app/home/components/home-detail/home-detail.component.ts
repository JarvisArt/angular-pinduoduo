import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ImageSlider, Channel } from '../../../shared/components'
import { HomeService } from './../../services/home.service';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: HomeService, private cd: ChangeDetectorRef) { }
  selectedTabLink;
  imageSliders: ImageSlider[] = [];
  channels: Channel[] = [];

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.selectedTabLink = params.get('tabLink');
      this.cd.markForCheck();
    })
    this.service.getChannel().subscribe(channels => {
      this.channels = channels
      this.cd.markForCheck();
    });
    this.service.getImageSliders().subscribe(banners => {
      this.imageSliders = banners
      this.cd.markForCheck();
    });
  }
}
