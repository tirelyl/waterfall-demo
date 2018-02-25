import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // 图片数组
  imgArray = [
    'assets/images/1.png',
    'assets/images/2.jpg',
    'assets/images/3.jpg',
    'assets/images/4.jpg',
    'assets/images/5.jpg',
    'assets/images/6.jpg',
    'assets/images/7.jpg',
    'assets/images/8.jpg',
    'assets/images/9.jpg',
    'assets/images/10.jpg',
    'assets/images/11.jpg',
    'assets/images/12.jpg',
  ];

  imgRow1 = [];
  imgRow2 = [];
  imgRow3 = [];
  imgRow4 = [];
  
  constructor() {

  }

  ngOnInit() {
    this.initWaterFall();
    console.log(this.imgRow1);
    console.log(this.imgRow2);
    console.log(this.imgRow3);
    console.log(this.imgRow4);
  }

  /** 
   * 初始化所有瀑布流中的图片
  */
  initWaterFall() {
    let count = 1;
    this.imgArray.forEach(url => {
      if (count === 1) {
        this.imgRow1.push(url);
      } else if (count === 2) {
        this.imgRow2.push(url);
      } else if (count === 3) {
        this.imgRow3.push(url);
      } else if (count === 4) {
        this.imgRow4.push(url);
      }
      if (count === 4) {
        count = 1;
      } else {
        count++;
      }
    });
  }

}
