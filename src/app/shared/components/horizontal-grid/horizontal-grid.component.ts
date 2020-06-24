import { Component, OnInit } from '@angular/core';

export interface Channel {
  id: string,
  icon: string,
  title: string,
  link: string
}
@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {

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
    }
  ]
  constructor() { }

  ngOnInit() {
  }
}
