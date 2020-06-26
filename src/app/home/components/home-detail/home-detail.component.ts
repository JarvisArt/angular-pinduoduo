import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ImageSlider, Channel } from '../../../shared/components'

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  selectedTabLink;
  imageSliders: ImageSlider[] = [
    { imgUrl: 'https://hbimg.huabanimg.com/f3a346848be168276419d6d8e214ffa8058065167f826-WjETIh_fw658/format/webp', link: '', caption: '' },
    { imgUrl: 'https://hbimg.huabanimg.com/6cba9ef39c50057f77002482307b7441641586ce7f751-gq0YWe_fw658/format/webp', link: '', caption: '' },
    { imgUrl: 'https://hbimg.huabanimg.com/ff927997f4e188d7dc2495e7e89378b64e67262682c3b-noFTD7_fw658/format/webp', link: '', caption: '' },
    { imgUrl: 'https://hbimg.huabanimg.com/9d48c592d1d77be341dab0fa03fc1849c717ae5e10151-RY8nM9_fw658/format/webp', link: '', caption: '' },
    { imgUrl: 'https://hbimg.huabanimg.com/72ae4108743b436e1a944c0f9f4d9f949168b51a54be-lA8Kar_fw658/format/webp', link: '', caption: '' },
  ];
  channels: Channel[] = [
    {
      id: '1',
      title: '类型一',
      icon: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2857651952,3566791378&fm=26&gp=0.jpg',
      link: 'body'
    },
    {
      id: '2',
      title: '类型二',
      icon: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2857651952,3566791378&fm=26&gp=0.jpg',
      link: 'body'
    },
    {
      id: '3',
      title: '类型三',
      icon: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2857651952,3566791378&fm=26&gp=0.jpg',
      link: 'body'
    },
    {
      id: '4',
      title: '类型四',
      icon: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2857651952,3566791378&fm=26&gp=0.jpg',
      link: 'body'
    },
    {
      id: '5',
      title: '类型五',
      icon: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2857651952,3566791378&fm=26&gp=0.jpg',
      link: 'body'
    },
    {
      id: '6',
      title: '类型六',
      icon: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2857651952,3566791378&fm=26&gp=0.jpg',
      link: 'body'
    },
    {
      id: '7',
      title: '类型七',
      icon: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2857651952,3566791378&fm=26&gp=0.jpg',
      link: 'body'
    },
    {
      id: '8',
      title: '类型八',
      icon: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2857651952,3566791378&fm=26&gp=0.jpg',
      link: 'body'
    },
    {
      id: '9',
      title: '类型九',
      icon: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2857651952,3566791378&fm=26&gp=0.jpg',
      link: 'body'
    },
    {
      id: '10',
      title: '类型十',
      icon: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2857651952,3566791378&fm=26&gp=0.jpg',
      link: 'body'
    },
    {
      id: '11',
      title: '类型十一',
      icon: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2857651952,3566791378&fm=26&gp=0.jpg',
      link: 'body'
    },
    {
      id: '12',
      title: '类型十二',
      icon: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2857651952,3566791378&fm=26&gp=0.jpg',
      link: 'body'
    },
    {
      id: '13',
      title: '类型十三',
      icon: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2857651952,3566791378&fm=26&gp=0.jpg',
      link: 'body'
    },
    {
      id: '14',
      title: '类型十四',
      icon: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2857651952,3566791378&fm=26&gp=0.jpg',
      link: 'body'
    },
    {
      id: '15',
      title: '类型十五',
      icon: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2857651952,3566791378&fm=26&gp=0.jpg',
      link: 'body'
    },
    {
      id: '16',
      title: '类型十六',
      icon: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2857651952,3566791378&fm=26&gp=0.jpg',
      link: 'body'
    },
  ]

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.selectedTabLink = params.get('tabLink');
    })
  }
}
