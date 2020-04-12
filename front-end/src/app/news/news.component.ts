import { Component, OnInit, AfterViewInit,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, AfterViewInit {
  cards = [
    {img: '../assets/images/glace1.jpg'},
    {img: '../assets/images/glace2.jpg'},
    {img: '../assets/images/glace4.jpg'},
    {img: '../assets/images/milshake3.jpg'},
    {img: '../assets/images/milshake1.jpg'},
    {img: '../assets/images/milshake2.jpg'},
    {img: '../assets/images/barbecue1.jpg'},
    {img: '../assets/images/barbecue2.jpg'},
    {img: '../assets/images/barbecue3.jpg'},
    ];

  slides: any = [[]];

  constructor(private renderer: Renderer2) { }

  chunk(arr: any, chunkSize: number) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  ngOnInit(): void {
    this.slides = this.chunk(this.cards, 3);
  }
  ngAfterViewInit() {
    const buttons = document.querySelectorAll('.btn-floating');
    buttons.forEach((el: any) => {
      this.renderer.removeClass(el, 'btn-floating');
      this.renderer.addClass(el, 'px-3');
      this.renderer.addClass(el.firstElementChild, 'fa-3x');
    });
  }
}


