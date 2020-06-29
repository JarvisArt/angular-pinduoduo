import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TopMenu, ImageSliderComponent } from '../../../shared/components'
import { HomeService } from './../../services/home.service';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  constructor(private router: Router, private service: HomeService) { }

  @ViewChild(ImageSliderComponent) imgSlider: ImageSliderComponent
  scrollabTabBgColor = 'red';
  topMenus: TopMenu[] = [];

  handleTabSelected(topMenu: TopMenu) {
    this.router.navigate(['home', topMenu.link]);
  }

  ngAfterViewInit(): void {
    console.log('app.component', this.imgSlider);
  }

  ngOnInit() {
    this.topMenus = this.service.getTabs();
  }
}
