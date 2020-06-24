import { Component, ViewChild } from '@angular/core';
import { TopMenu, ImageSlider, ImageSliderComponent } from './shared/components'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(ImageSliderComponent) imgSlider: ImageSliderComponent
  scrollabTabBgColor = 'red';
  topMenus: TopMenu[] = [
    { title: '热门', link: '' },
    { title: '男装', link: '' },
    { title: '百货', link: '' },
    { title: '运动', link: '' },
    { title: '手机', link: '' },
    { title: '家纺', link: '' },
    { title: '食品', link: '' },
    { title: '电器', link: '' },
    { title: '鞋包', link: '' },
    { title: '汽车', link: '' },
    { title: '水果', link: '' },
    { title: '电脑', link: '' },
    { title: '内衣', link: '' },
    { title: '家装', link: '' },
    { title: '母婴', link: '' },
    { title: '美妆', link: '' },
    { title: '家具', link: '' }
  ];
  imageSliders: ImageSlider[] = [
    { imgUrl: 'https://hbimg.huabanimg.com/f3a346848be168276419d6d8e214ffa8058065167f826-WjETIh_fw658/format/webp', link: '', caption: '' },
    { imgUrl: 'https://hbimg.huabanimg.com/6cba9ef39c50057f77002482307b7441641586ce7f751-gq0YWe_fw658/format/webp', link: '', caption: '' },
    { imgUrl: 'https://hbimg.huabanimg.com/ff927997f4e188d7dc2495e7e89378b64e67262682c3b-noFTD7_fw658/format/webp', link: '', caption: '' },
    { imgUrl: 'https://hbimg.huabanimg.com/9d48c592d1d77be341dab0fa03fc1849c717ae5e10151-RY8nM9_fw658/format/webp', link: '', caption: '' },
    { imgUrl: 'https://hbimg.huabanimg.com/72ae4108743b436e1a944c0f9f4d9f949168b51a54be-lA8Kar_fw658/format/webp', link: '', caption: '' },
  ];

  handleTabSelected(topMenu: TopMenu) {
    const colors = ['red', 'blue', 'black'];
    const idx = Math.floor(Math.random() * 3);
    this.scrollabTabBgColor = colors[idx];
    console.log(topMenu);
  }

  ngAfterViewInit(): void {
    console.log('app.component', this.imgSlider);
  }
}
