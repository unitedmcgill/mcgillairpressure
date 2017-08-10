import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';
import { ConfigService } from '../../services/config.service';

@Component({
    selector : 'app-jumbotron',
    templateUrl: 'jumbotron.component.html'
})
export class JumbotronComponent implements OnInit {

  title = 'app works!';
  public myInterval:number = 8000;
  public noWrapSlides:boolean = false;
  public slides:Array<any> = [];
  public vdSlides:Array<any> = [];

  public constructor( public config : ConfigService ) {
    // Set the images for the jumbotron
    this.slides.push({
        image: `assets/img/carousel/bonding1.jpg`,
        text: `Bonding`,
        aorv: `a`
      },
      {
        image: `assets/img/carousel/vulcanizing.jpg`,
        text: `Vulcanizing`,
        aorv: `a`
      },      
      {
        image: `assets/img/carousel/curing.jpg`,
        text: `Curing`,
        aorv: `a`
      },      
      {
        image: `assets/img/carousel/laminating.jpg`,
        text: `Laminating`,
        aorv: `a`
      },      
      {
        image: `assets/img/carousel/partsnservice.jpg`,
        text: `Parts & Service`,
        aorv: `a`
      });

      this.vdSlides.push({
        image: `assets/img/carousel/shelf.jpg`,
        text: `Shelf Dryer`,
        aorv: `v`
      },      
      {
        image: `assets/img/carousel/conical.jpg`,
        text: `Conical Dryer`,
        aorv: `v`
      },      
      {
        image: `assets/img/carousel/rotary.jpg`,
        text: `Rotary Dryer`,
        aorv: `v`
      },      
      {
        image: `assets/img/carousel/partsnservice.jpg`,
        text: `Parts & Service`,
        aorv: `v`
      });


    // for (let i = 0; i < 4; i++) {
    //   this.addSlide();
    // }
  }

  // public addSlide():void {
  //   let newWidth = 600 + this.slides.length + 1;
  //   this.slides.push({
  //     image: `//placekitten.com/${newWidth}/300`,
  //     text: `${['More', 'Extra', 'Lots of', 'Surplus'][this.slides.length % 4]}
  //     ${['Cats', 'Kittys', 'Felines', 'Cutes'][this.slides.length % 4]}`
  //   });
  // }

  // public removeSlide(index:number):void {
  //   this.slides.splice(index, 1);
  // }  

    ngOnInit(): void {
        
    }
}
