import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent  {

  links = [
    { label: 'Home', path: '/' },
    { label: 'Information', path: '/info' },
    { label: 'Shop', path: '/shop' },
    { label: 'Privacy Policy', path: '/privacy-policy' }
  ];

}
