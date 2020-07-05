import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { TopMenu, ImageSliderComponent } from '../../../shared/components'
import { HomeService } from './../../services/home.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  @ViewChild(ImageSliderComponent) imgSlider: ImageSliderComponent
  scrollabTabBgColor = 'red';
  topMenus$: Observable<TopMenu[]>;
  selectedTabLink$: Observable<string>;

  constructor(private router: Router, private service: HomeService, private route: ActivatedRoute) {

  }

  handleTabSelected(topMenu: TopMenu) {
    this.router.navigate(['home', topMenu.link]);
  }

  ngAfterViewInit(): void {

  }

  ngOnInit() {
    this.topMenus$ = this.service.getTabs();
    this.selectedTabLink$ = this.route.firstChild.paramMap.pipe(
      filter(params => params.has('tabLink')),
      map(params => params.get('tabLink'))
    )
  }
}
