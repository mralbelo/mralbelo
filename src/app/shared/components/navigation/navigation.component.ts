import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 100,
            header = document.querySelector('nav');
        if (distanceY > shrinkOn) {
            header.classList.add('navbar-onscroll');
        } else if (distanceY < shrinkOn) {
            header.classList.remove('navbar-onscroll');
        }
        
    });
  }

}
