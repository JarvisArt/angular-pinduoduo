import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ImageSlider, Channel } from '../../../shared/components'
import { HomeService } from './../../services/home.service';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: HomeService) { }
  selectedTabLink;
  imageSliders: ImageSlider[] = [];
  channels: Channel[] = [];

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.selectedTabLink = params.get('tabLink');
    })
    this.channels = this.service.getChannel();
    this.imageSliders = this.service.getImageSliders();
  }
}
